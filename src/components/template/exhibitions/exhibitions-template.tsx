"use client";
import "./exhibitions-template.css";
import { GET } from "../../../app/api/exhibitions/route";
import { useEffect, useState } from "react";

export default function ExhibitionsTemplate() {
  const [exhibitionsData, setExhibitionsData] = useState<any[]>();

  useEffect(() => {
    GET().then((r) => {
      setExhibitionsData(r);
    });
  }, []);

  return (
    <section id="exhibitions">
      <div className="container exhibitions__container">
        <h2 className="exhibitions__title">Exibições</h2>
        <div className="exhibitions__head">
          <p>Um pouquinho de minhas exibições</p>
        </div>
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
    </section>
  );
}
