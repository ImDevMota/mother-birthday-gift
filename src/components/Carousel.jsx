import Foto1 from "../assets/img-1.jpeg";
import Foto2 from "../assets/img-2.jpeg";
import Foto3 from "../assets/img-3.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const imgs = [Foto1, Foto2, Foto3];

export default function Carousel() {
  return (
    <Swiper
      modules={[Autoplay]} // Diz que vai usar o autoplay
      spaceBetween={0} // Sem espaçamento entre slides
      slidesPerView={1} // 1 imagem por vez
      loop={true} // Loop infinito
      speed={1500} // Duração da animação (1.5s)
      autoplay={{
        // Configura o autoplay
        delay: 3000, // Troca de slide a cada 3 segundos
        disableOnInteraction: false, // Continua autoplay mesmo após interação do usuário
      }}
      className="w-full h-[30rem]" // Pode customizar com Tailwind (altura, largura)
    >
      {imgs.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`slide-${index}`}
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
