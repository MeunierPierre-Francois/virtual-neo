import { Jeu } from "../../models/Jeu";
import { mongooseConnect } from "../../lib/mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  if (request.query?.id) {
    return NextResponse.json(await Jeu.findOne({ _id: request.query.id }));
  }
  return NextResponse.json(await Jeu.find());
}

export async function POST(request) {
  await mongooseConnect();
  const body = await request.json();
  const {
    nom,
    description,
    descriptionCourte,
    prix,
    age,
    joueurMax,
    joueurMin,
  } = body;

  const jeu = await Jeu.create({
    nom,
    description,
    descriptionCourte,
    prix,
    age,
    joueurMax,
    joueurMin,
  });

  return NextResponse.json(jeu);
}
