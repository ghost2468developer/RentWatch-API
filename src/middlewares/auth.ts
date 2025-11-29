import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { env } from '../config/env'

export interface AuthRequest extends Request {
    user?: any
}

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization
    if(!authHeader) return res.status(401).json({ message: 'No token provided' })

    const token = authHeader.split(' ')[1]
    if(!token) return res.status(401).json({ message: 'Invalid token' })

    try {
        const decoded = jwt.verify(token, env.JWT_SECRET)
        req.user = decoded
        next()
    }   catch {
        return res.status(401).json({ message: 'Token invalid or expired '})
    }
}