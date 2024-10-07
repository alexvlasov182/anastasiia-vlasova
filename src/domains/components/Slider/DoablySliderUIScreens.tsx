import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import styles from '../../components/ReconHub/ReconHub.module.scss';

// Import Swiper styles
import 'swiper/css';               // Core Swiper styles
import 'swiper/css/navigation';    // Navigation module styles
import 'swiper/css/pagination';

// Import required modules (like pagination, navigation, etc.)
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const DoablySliderUIScreens: React.FC  = () => {
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
          <img className={styles.imageSize} src="/images/doably/doably-ui-3.jpg" alt="Doably Preview UI Screens 1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img className={styles.imageSize} src="/images/doably/doably-ui-2.jpg" alt="Doably Preview UI Screens 2" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img className={styles.imageSize} src="/images/doably/doably-ui-1.jpg" alt="Doably Preview UI Screens 3" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default DoablySliderUIScreens;