import { prisma } from '../../prisma/client'
import { hashPassword, comparePassword } from '../../utils/hash'
import { generateToken } from '../../utils/jwt'

interface RegisterInput {
    name: string
    email: string
    password: string
    role: "TENANT" | "LANDLORD"
}

interface LoginInput {
    email: string
    password: string
}

export async function registerUser(data: RegisterInput) {
    const hashed = await hashPassword(data.password)
    const user = await prisma.user.create({
        data: {...data, password: hashed}
    })
    return user
}

export async function loginUser(data: LoginInput) {
    const user = await prisma.user.findUnique({ where: { email: data.email }})
    if (!user) throw new Error('User not found')
    
    const isValid = await comparePassword(data.password, user.password)
    if (!isValid) throw new Error('Invalid password')

    const token = generateToken({ id: user.id, role: user.role })
    return { user, token }
}