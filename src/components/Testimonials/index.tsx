import styles from "./styles.module.scss";
import { BsChatSquareQuote } from "react-icons/bs";
import { Lato } from "next/font/google";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";

const lato = Lato({ weight: ["100", "400", "700"], subsets: ["latin"] });

const data = [
  {
    id: 1,
    text: "Gostaria de elogiar a eficiência e a atenção aos detalhes da equipe jurídica. Sempre entregam resultados de alta qualidade.",
    name: "Sofia Rodrigues",
    img: "/img/user1.jpg",
  },
  {
    id: 2,
    text: "A equipe demonstrou um profundo conhecimento em sua área de atuação, o que me deu confiança em sua capacidade de representar meus interesses.",
    name: "Lucas Pereira",
    img: "/img/user2.jpg",
  },
  {
    id: 3,
    text: "Agradeço pela orientação legal sólida e pelo acompanhamento atencioso durante todo o processo. Isso realmente aliviou minha ansiedade.",
    name: "Pedro Gomes",
    img: "/img/user3.jpg",
  },
  {
    id: 4,
    text: "Fiquei muito satisfeito com a maneira como o escritório lidou com meu caso. A comunicação foi clara e o atendimento ao cliente foi excepcional.",
    name: "Isabela Santos",
    img: "/img/user4.jpg",
  },
];

export const Testimonials = () => {
  const [slidePerView,setSlidePerView] =useState(2);
  useEffect(()=>{
    function handleResize(){
      if(window.innerWidth < 1140 ){
        setSlidePerView(1)
      } else{
        setSlidePerView(2)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }

  },[])
  return (
    <div className={`${styles.container} ${lato.className} `}>
      <h1>Depoimentos</h1>
      <div className={styles.carouselContainer}>
        <Swiper
          
        modules={[Navigation, Autoplay]}
          slidesPerView={slidePerView}
        spaceBetween={5}
           autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          
        >
          {data.map((item) => (
            <SwiperSlide className={styles.containerSlide} key={`${item.name} + ${item.id}`}>
              <div className={styles.slide}>
                <BsChatSquareQuote size={50} color={"var(--yellow-700)"} />
                <p>{item.text}</p>
                <div className={styles.slideContent}>
                  <div className={styles.userImg}>
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill={true}
                    />
                  </div>
                  <span>{item.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
