import { serialize } from 'cookie';
export default async (req, res) => {

    if (req.method === 'POST') {
        // Process a POST request
        const reqBody = req.body
        const resBody = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody),
        });
        const response = await resBody.json()
        if (response.statusCode) {
            console.log("No tokens")
            res.status(200).json(
                {
                    error: response.error,
                    message: response.message[0].messages[0].message,
                }
            )
        } else {
            res.setHeader('Set-Cookie', [serialize('token', response.jwt, { path: '/', httpOnly: true, maxAge: 72576000, secure: true },), serialize('usertoken', JSON.stringify({ id: response.user._id, email: response.user.email, username: response.user.username }), { path: '/', httpOnly: false, maxAge: 72576000, secure: true },)]);
            res.status(200).json(response)
        }
    } else {
        res.status(400).json({ status: "You don't belong here" })
    }
}
