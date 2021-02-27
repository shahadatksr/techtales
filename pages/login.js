import { useContext, useState } from 'react'
import { parseCookies } from 'nookies'
import AuthContext from '../context/AuthContext'
import { useRouter } from 'next/router'
import styles from "../styles/Login.module.css"
import Link from 'next/link'


export default function login() {

    const router = useRouter()
    const [email, setEmail] = useState("")
    const [error, setError] = useState(null)
    const [password, setPassword] = useState("")

    const { user, setUser } = useContext(AuthContext)
    async function loginHandler(e) {
        e.preventDefault()
        const formData = {
            identifier: email,
            password: password,
        }
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const response = await res.json();
        if (response.error) {
            console.log(response.message)
            setError(response.message)
        } else {
            const { usertoken } = parseCookies()
            setUser(usertoken)
            router.push("/profile")
        }
    }
    if (user) {
        router.push("/profile")
        return <></>
    } else {

        return (
            <div className={styles.wrapper}>
                <div className={styles.login}>
                    <div className={styles.login_triangle}></div>

                    <h2 className={styles.login_header}>Log in</h2>

                    <form className={styles.login_container} onSubmit={loginHandler}>
                        <p><input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} /></p>
                        <p><input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /></p>
                        {error && <h3>{error}</h3>}
                        <p><input type="submit" value="Log in" /></p>
                    </form>
                    <h3>Don't have an account?</h3>
                    <Link href="/register">
                        <a>Register</a>
                    </Link>
                </div>
            </div>
        )
    }
}
