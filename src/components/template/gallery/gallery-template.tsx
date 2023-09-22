"use client";
import "./gallery-template.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function GalleryTemplate() {
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
          <SwiperSlide className="swiper-slide">
            <img
              src="/images/gallery/18278491_1393881680669626_1416897479870263424_o.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/images/gallery/IMG-20190217-WA0007.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/images/gallery/IMG-20220102-WA0009.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
