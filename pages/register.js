import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from "../styles/Login.module.css"
import Link from 'next/link'

export default function register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const router = useRouter()

    async function registerHandler(e) {
        e.preventDefault()
        console.log(email, password)
        const formData = {
            username: username,
            email: email,
            password: password,
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const response = await res.json();
        router.push('/login')
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.login}>
                <div className={styles.login_triangle}></div>

                <h2 className={styles.login_header}>Register</h2>

                <form className={styles.login_container} onSubmit={registerHandler}>
                    <p><input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} /></p>
                    <p><input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} /></p>
                    <p><input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /></p>
                    <p><input type="submit" value="Register" /></p>
                </form>
                <h3>Already have an account?</h3>
                <Link href="/login">
                    <a>Login</a>
                </Link>
            </div>
        </div>
    )
}

