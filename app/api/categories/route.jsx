import { Categorie } from "../../models/Categorie";
import { NextResponse } from "next/server";
import { mongooseConnect } from "../../lib/mongoose";

export async function POST(request) {
  await mongooseConnect();
  const body = await request.json();
  const { nom } = body;

  const categorie = await Categorie.create({
    nom,
  });
  return NextResponse.json(categorie);
}

export async function GET(request) {
  await mongooseConnect();

  return NextResponse.json(await Categorie.find());
}
