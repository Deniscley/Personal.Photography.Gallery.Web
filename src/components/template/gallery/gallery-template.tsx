"use client";
import "./gallery-template.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { GET } from "../../../app/api/gallery/route";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

export default function GalleryTemplate() {
  const [galleryData, setGalleryData] = useState<any[]>();

  useEffect(() => {
    GET().then((r) => {
      setGalleryData(r);
    });
  }, []);

  return (
    <section id="gallery">
      <div className="container gallery__container swiper mySwiper">
        <div className="gallery__head">
          <h2 className="gallery__title">Minha Galeria</h2>
          <div className="empty gallery__empty"></div>
        </div>
        <p>Amigos e família.</p>

        <Swiper
          slidesPerView={"auto"}
          // slidesPerView={2}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // when window width is >= 280px
            280: {
              slidesPerView: 1,
            },
            // when window width is >= 412px
            412: {
              slidesPerView: 1,
            },
            // when window width is >= 964px
            964: {
              // width: 964,
              slidesPerView: 2,
            },
          }}
          modules={[Pagination]}
          className="swiper-wrapper"
        >
          {galleryData?.map(({ id, base64Data }) => {
            return (
              <SwiperSlide className="swiper-slide" key={id}>
                <img src={base64Data} alt="Fotos com amigos e família" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
