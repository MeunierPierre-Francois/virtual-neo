import { User } from "../../models/User";
import { mongooseConnect } from "../../lib/mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  await mongooseConnect();

  const body = await request.json();

  const { email, nom, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    email,
    nom,
    hashedPassword,
  });

  return NextResponse.json(user);
}
