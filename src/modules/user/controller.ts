import { Request, Response } from 'express'
import * as userService from './service'

export async function register(req: Request, res: Response) {
    try {
        const user = await userService.registerUser(req.body)
        res.status(201).json(user)
    }   catch (err: any) {
        res.status(400).json({ message: err.messaage })
    }
}

export async function login(req: Request, res: Response) {
    try {
        const result = await userService.loginUser(req.body)
        res.json(result)
    }   catch (err: any) {
        res.status(400).json({ message: err.message })
    }
}
