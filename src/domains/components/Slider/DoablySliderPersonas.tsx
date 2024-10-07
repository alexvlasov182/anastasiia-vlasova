import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import styles from '../../components/ReconHub/ReconHub.module.scss';

// Import Swiper styles
import 'swiper/css';               // Core Swiper styles
import 'swiper/css/navigation';    // Navigation module styles
import 'swiper/css/pagination';

// Import required modules (like pagination, navigation, etc.)
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const DoablySliderPersonas: React.FC  = () => {
  return (
    <Swiper
      // Required modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("Slide change")}
    >
      <SwiperSlide>
        <div>
          <img className={styles.imageSize} src="/images/doably/doably-personas-1.jpg" alt="Doably Preview Personas" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img className={styles.imageSize} src="/images/doably/doably-personas-2.jpg" alt="Doably Preview Personas"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img className={styles.imageSize} src="/images/doably/doably-personas-3.jpg" alt="Doably Preview Personas"/>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default DoablySliderPersonas;