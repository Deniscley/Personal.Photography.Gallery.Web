export async function GET() {
  const res = await fetch(`${process.env.customKey}/api/galeria/obter-todos`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Falha ao buscar dados");
  }

  const data = await res.json();
  return data;
}
