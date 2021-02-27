import ReactMarkdown from "react-markdown";
import { useState, useEffect } from 'react';
import Codeblock from "./codeblock";
import Prism from "prismjs";
import styles from "../styles/Post.module.css"





function Post({ post }) {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            Prism.highlightAll();
        }
    }, []);

    const renderers = {
        code: ({ language, value }) => {

            return <Codeblock language={language} value={value}></Codeblock>
        },
    }

    return (
        <div className={styles.post_container}>
            <img src={post.featured.url} alt="" />
            <div className={styles.post}>
                <div className={styles.top}>
                    <h1>{post.title}</h1>
                    <h2>Updated: {getDate(post.updatedAt)}</h2>
                    {/* <h3>{post.excerpt}</h3> */}
                </div>
                <ReactMarkdown className={styles.content} renderers={renderers} source={post.content} />
            </div>
        </div>
    )
}

export default Post



function getDate(created) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var month = +created.slice(5, 7);
    var day = +created.slice(8, 10);
    var year = +created.slice(0, 4);
    return monthNames[month] + " " + day + ", " + year + ".";
}