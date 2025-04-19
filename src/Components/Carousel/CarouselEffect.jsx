import React from "react";
 import styles from "./carousel.module.css";
 import "react-responsive-carousel/lib/styles/carousel.min.css";
 import { Carousel } from "react-responsive-carousel";
 
 import carsImg from "./CarouselImage/carsImg";
 import { fabClasses } from "@mui/material";
 function CarouselEffect() {
   return (
     <>
     <Carousel
       autoPlay={true}
      showThumbs={false}
       infiniteLoop={true}
       showIndicators={false}
     >
       {carsImg?.map((imgLink, i) => {
         return <img src={imgLink} alt="" key={i} />;
       })}
     </Carousel>
 
     <div className={styles.carousel_showdow}></div>
     </>
   );
 }
 
 export default CarouselEffect;