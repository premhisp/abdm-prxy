export const checkAuth = (req, res, next) => {
    const { USER_ID, PASSWORD } = process.env

    const base64Credentials = req.headers.authorization?.split(' ')[1];

    if (!base64Credentials) return res.status(401).json({ message: 'Invalid Authentication Credentials' });

    console.log('base64Credentials:>>>>>>', base64Credentials)
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    if (username == USER_ID && password == PASSWORD) {
        next()
    } else return res.status(401).json({ message: 'Invalid Authentication Credentials' });
}
