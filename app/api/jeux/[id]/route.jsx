import { Jeu } from "../../../models/Jeu";
import { mongooseConnect } from "../../../lib/mongoose";
import { NextResponse } from "next/server";

export async function GET(request, params) {
  await mongooseConnect();

  const { id } = params.params;
  return NextResponse.json(await Jeu.findOne({ _id: id }));
}

export async function DELETE(params) {
  await mongooseConnect();

  const { id } = params.params;

  return NextResponse.json(await Jeu.deleteOne({ _id: id }));
}

export async function PUT(request, params) {
  await mongooseConnect();

  const { id } = params.params;
  const body = await request.json();
  const { enAvant } = body;

  console.log("ID", id);
  console.log("TEST", enAvant);
  return NextResponse.json(
    await Jeu.updateOne({ _id: id }, { enAvant: enAvant })
  );
}
