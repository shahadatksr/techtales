import AuthContext from '../context/AuthContext';
import { useContext } from "react";
import Link from 'next/link'
import styles from "../styles/Profile.module.css"


export default function profile() {
    const { user } = useContext(AuthContext)
    if (!user) {
        return (
            <div>
                <Link href="/login">
                    <a>Login</a>
                </Link>
            </div>
        )
    } else {
        const currentUser = JSON.parse(user)
        return (
            <>
                <div>
                    <div className={styles.box} >
                        <h1 className={styles.header}> Welcome, {currentUser.username}</h1>
                        <a href="/logout" className={styles.logout}>Logout</a>
                    </div>
                </div>
            </>
        )
    }
}
