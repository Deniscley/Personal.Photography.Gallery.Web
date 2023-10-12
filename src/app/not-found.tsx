import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container notfound-error__container">
      <h4 className="heading">Não Encontrado!</h4>
      <h2>
        <span>Não foi possível encontrar o recurso solicitado.</span>
      </h2>
      <Link href="/" className="btn">
        Retornar
      </Link>
    </div>
  );
}
