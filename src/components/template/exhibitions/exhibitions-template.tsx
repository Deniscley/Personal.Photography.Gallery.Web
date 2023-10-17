"use client";
import "./exhibitions-template.css";
import { GET } from "../../../app/api/exhibitions/route";
import { useEffect, useState } from "react";
import Spinner from "@/components/layout/spinner/spinner";

export default function ExhibitionsTemplate() {
  const [exhibitionsData, setExhibitionsData] = useState<any[]>();
  const [statusSpinner, setStatusSpinner] = useState<boolean>(false);

  useEffect(() => {
    GET().then((r) => {
      setExhibitionsData(r);
      setStatusSpinner(true);
    });
  }, []);

  return (
    <section id="exhibitions">
      <div className="container exhibitions__container">
        <h2 className="exhibitions__title">Exibições</h2>
        <div className="exhibitions__head">
          <p>Meu cantinho de exibições pessoais.</p>
        </div>

        <div>
          {!statusSpinner && <Spinner />}
          <div className="exhibitions__gallery">
            {exhibitionsData?.map(({ id, base64Data }) => {
              return (
                <article key={id}>
                  <img src={base64Data} alt="Fotos pessoais" />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
