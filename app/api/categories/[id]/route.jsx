import { Categorie } from "../../../models/Categorie";
import { mongooseConnect } from "../../../lib/mongoose";
import { NextResponse } from "next/server";

export async function DELETE(request, params) {
  await mongooseConnect();

  const { id } = params.params;

  return NextResponse.json(await Categorie.deleteOne({ _id: id }));
}

export async function PUT(request, params) {
  await mongooseConnect();

  const { id } = params.params;
  const body = await request.json();
  const { nom } = body;

  return NextResponse.json(await Categorie.updateOne({ _id: id }, { nom }));
}
