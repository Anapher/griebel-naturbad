import React from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import '../style/react-slider.scss';
import Slider, { Settings } from 'react-slick';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

const useStyle = makeStyles((theme) => ({
   main: {
      border: '0',
      marginBottom: '30px',
      marginTop: '30px',
      borderRadius: '6px',
      color: 'rgba(0, 0, 0, 0.87)',
      background: '#fff',
      width: '100%',
      boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      minWidth: '0',
      wordWrap: 'break-word',
      fontSize: '.875rem',
      transition: 'all 300ms linear',
      overflow: 'hidden',
   },
   text: {
      backgroundColor: 'rgba(45, 52, 54, 0.5)',
      borderRadius: theme.shape.borderRadius,
   },
}));

type Props = {
   images: IGatsbyImageData[];
};

export default function Carousel({ images }: Props) {
   const settings: Settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
   };

   const classes = useStyle();

   return (
      <div className={classes.main}>
         <Slider {...settings}>
            {images.map((image, i) => (
               <GatsbyImage
                  key={i}
                  image={image}
                  alt=""
                  style={{ width: '100%', height: '100%' }}
                  className="slick-image"
               />
            ))}
         </Slider>
      </div>
   );
}
