import React from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css"
import mobStyles from "../styles/Mob.module.css"
import { useState, useEffect, useContext } from 'react'
import { useTheme } from 'next-themes'
import AuthContext from '../context/AuthContext';


const Nav = ({ categories }) => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const { user } = useContext(AuthContext)

    useEffect(() => setMounted(true), [])

    function handleOnClick() {


        var mode = theme == 'light' ? 'dark' : 'light';
        // setDark(!dark)
        setTheme(mode)
        console.log(mode)
    }

    return (
        <>
            <div className={mobStyles.mob_menu}>
                <input type="checkbox" className={mobStyles.toggler} />
                <div className={mobStyles.hamburger}><div></div></div>
                <div className={mobStyles.menu}>
                    <div>
                        <div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                {user && <li><a href="/profile">Profile</a></li>}
                                {!user && <li><a href="/login">Login</a></li>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.brand} >
                    <Link href="/">
                        <a>Next Blog</a>
                    </Link>
                </div>
                <div className={styles.nav}>
                    <ul>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>Contact Us</a>
                            </Link>
                        </li>
                        {user && <li><a href="/profile">Profile</a></li>}
                        {!user && <li><a href="/login">Login</a></li>}
                    </ul>
                </div>
                {mounted && <div className={styles.icon_div}>
                    <img onClick={handleOnClick} src={theme == 'dark' ? "/dark.svg" : "/light.svg"} alt={theme} />

                </div>}
            </div>

        </>
    );
};

export default Nav;