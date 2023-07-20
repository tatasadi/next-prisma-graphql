import prisma from "../../../../../lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { email, secret } = await req.json()

  if (secret !== process.env.AUTH0_HOOK_SECRET) {
    return NextResponse.json(
      { error: `You must provide the secret 🤫` },
      { status: 500 }
    )
  }

  if (email) {
    await prisma.user.create({
      data: { email },
    })
    return NextResponse.json({
      message: `User with email: ${email} has been created successfully!`,
    })
  }
}
