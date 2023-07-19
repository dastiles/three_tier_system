import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const {
            email,
            fullname,
            password: hashedPassword
        } = body

        console.log(email, fullname, hashedPassword)

        if (!email || !fullname || !hashedPassword) {
            return new NextResponse('Missing info', { status: 400 })
        }

        const user = await prisma.user.create({
            data: {
                email, fullname, hashedPassword
            }
        })

        return NextResponse.json(user)
    } catch (error: any) {
        console.log(error, 'REGISTRATION_ERROR')
        return new NextResponse('Internal Error', { status: 500 })
    }
}