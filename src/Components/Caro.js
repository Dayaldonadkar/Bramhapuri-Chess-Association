import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Caro = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-4/6">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img
              className="object-fill w-full"
              src="grouphoto.jpg"
              alt="image slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-fill w-full "
              src="/grouphoto.jpg"
              alt="image slide 2"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Caro;
