import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("http://localhost:5000/api/galeria/obter-todos");

  // const res = await fetch("https://localhost:44364/api/client/obter-todos", {
  //   mode: "no-cors",
  // });

  console.log("Resposta da requisição: ", res);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Falha ao buscar dados");
  }

  const data = await res.json();
  //  return NextResponse.json({ data });
  return data;
}
