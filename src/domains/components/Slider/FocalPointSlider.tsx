import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import styles from '../../components/ReconHub/ReconHub.module.scss';

// Import Swiper styles
import 'swiper/css';               // Core Swiper styles
import 'swiper/css/navigation';    // Navigation module styles
import 'swiper/css/pagination';

// Import required modules (like pagination, navigation, etc.)
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const FocalPointSlider: React.FC  = () => {
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
        <div style={{  padding: "40px" }}>
          <img className={styles.imageSize} src="src/assets/images/focal-point/fc-persona-1.png" alt="Focal Point Preview Personas" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{  padding: "40px" }}>
          <img className={styles.imageSize} src="src/assets/images/focal-point/fc-persona-2.png" alt="Focal Point Preview Personas"/>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default FocalPointSlider;