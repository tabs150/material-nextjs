// import Swiper core and required components
import SwiperCore, { Navigation, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';
import nat1 from '../public/images/nature-1.jpg'
import nat2 from '../public/images/nature-2.jpg'
import nat3 from '../public/images/nature-3.jpg'
import nat4 from '../public/images/nature-4.jpg'
// import '../public/mystyle.css'

// install Swiper components
SwiperCore.use([Navigation, A11y]);

export default function Swipe() {
  return (
    <main>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => (window.swiper = swiper)}
    >
      <SwiperSlide><img src={nat1} alt="nature-1" /></SwiperSlide>
      <SwiperSlide><img src={nat2} alt="nature-2" /></SwiperSlide>
      <SwiperSlide><img src={nat3} alt="nature-3" /></SwiperSlide>
      <SwiperSlide><img src={nat4} alt="nature-4" /></SwiperSlide>
    </Swiper>
    </main>
  )
}
