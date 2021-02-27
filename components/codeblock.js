import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import styles from "../styles/Codeblock.module.css"


function Codeblock({ language, value }) {

    const [copied, setCopied] = useState(false);

    function handleCopied() {
        setCopied(true);
        setTimeout(function () { setCopied(false) }, 1000)
    }

    return (
        <div className={styles.codeblock}>
            <CopyToClipboard text={value}
                onCopy={() => handleCopied()}>
                <span><img style={{ padding: "0px", maxWidth: "30px", width: "30px" }} src="/copy(1).svg" alt="" /></span>
            </CopyToClipboard>
            {copied ? <span className={styles.copied}>Copied</span> : null}
            <pre className="language-javascript" ><code>{value}</code></pre>
        </div>
    )
}

export default Codeblock
