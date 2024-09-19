import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";


// Import Swiper styles
import 'swiper/css';               // Core Swiper styles
import 'swiper/css/navigation';    // Navigation module styles
import 'swiper/css/pagination';

// Import required modules (like pagination, navigation, etc.)
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const MySlider: React.FC  = () => {
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
          <img src="src/assets/images/reconhub-slide-1.png" alt="ReconHub Preview Personas" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{  padding: "40px" }}>
          <img src="src/assets/images/reconhub-slide-2.png" alt="ReconHub Preview Personas"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{  padding: "40px" }}>
          <img src="src/assets/images/reconhub-slide-3.png" alt="ReconHub Preview Personas"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ padding: "40px" }}>
          <img src="src/assets/images/reconhub-slide-4.png" alt="ReconHub Preview Personas"/>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default MySlider;