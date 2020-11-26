// Import Swiper React components
import SwiperCore, { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Hidden from '@material-ui/core/Hidden';

// Import Swiper styles
import 'swiper/components/navigation/navigation.scss';
// import 'swiper/swiper.scss';
SwiperCore.use([Navigation, A11y]);
// const useStyles = makeStyles({
//   card: {
//     display: 'flex',
//     border: 0,
//     minHeight: '30vh',
//   },
  
// });

function HeroCarousel() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}

export default HeroCarousel
