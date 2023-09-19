"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <div className="container notfound-error__container">
        <h4 className="heading">Algo deu errado!</h4>
        <button
          className="btn"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Tente novamente
        </button>
      </div>
    </div>
  );
}
