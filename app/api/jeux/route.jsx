import { Jeu } from "../../models/Jeu";
import { mongooseConnect } from "../../lib/mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  await mongooseConnect();

  return NextResponse.json(await Jeu.find());
}

export async function POST(request) {
  await mongooseConnect();
  const body = await request.json();
  console.log("URL IMAGE", body);
  const {
    nom,
    description,
    descriptionCourte,
    prix,
    age,
    joueurMax,
    joueurMin,
    imageSrc,
    categorie,
  } = body;

  const jeu = await Jeu.create({
    nom,
    description,
    descriptionCourte,
    prix,
    age,
    joueurMax,
    joueurMin,
    imageSrc,
    categorie,
  });

  return NextResponse.json(jeu);
}

export async function PUT(request, params) {
  await mongooseConnect();
  const body = await request.json();
  const {
    _id,
    nom,
    description,
    descriptionCourte,
    prix,
    age,
    joueurMax,
    joueurMin,
    imageSrc,
    categorie,
  } = body;

  return NextResponse.json(
    await Jeu.updateOne(
      { _id },
      {
        nom,
        description,
        descriptionCourte,
        prix,
        age,
        joueurMax,
        joueurMin,
        imageSrc,
        categorie,
      }
    )
  );
}
