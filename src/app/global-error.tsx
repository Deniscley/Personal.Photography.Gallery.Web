"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="container notfound-error__container">
          <h4 className="heading">Algo deu errado!</h4>
          <button className="btn" onClick={() => reset()}>
            Tente novamente
          </button>
        </div>
      </body>
    </html>
  );
}
