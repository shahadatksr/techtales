function getInitialProps({ req, res }) {
    if (!process.browser) {
        const Cookies = require('cookies')
        const cookies = new Cookies(req, res)

        cookies.set('token')
        cookies.set('usertoken')

        res.writeHead(307, { Location: '/' })
        res.end()
    } else {
        return {}
    }
}

function Logout() {
    return (
        <div>
            <a href="/logout">Logout</a>
        </div>
    )
}

Logout.getInitialProps = getInitialProps

export default Logout