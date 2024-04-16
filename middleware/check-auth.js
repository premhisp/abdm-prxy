import jwt from "jsonwebtoken"

export const checkAuth = (req, res, next) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        req.userData = decoded
        next()
    } catch (error) {
        res.status(401).json({ message: 'Auth failed.' })
    }
}
