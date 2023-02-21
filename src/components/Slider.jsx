import React from 'react';
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGlobalContext } from "../Context/Contex";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Com.css";
import { Skeleton } from '@mui/material';



const Slider = () => {
    const { tMovies, Loading } = useGlobalContext();

    const Img_Url = "https://image.tmdb.org/t/p/original";

    SwiperCore.use([Autoplay])
    return (
        <>
            <section>
                {Loading ? (<div className='Main-Slider'>
                    <Swiper
                        modules={[Autoplay]}
                        grabCursor={true}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{ delay: 3000 }} >
                        {
                            tMovies.map((img, i) => (
                                <SwiperSlide key={i}>
                                    {({ isActive }) => (
                                        <img src={`${Img_Url}${img.poster_path}`} alt="" />
                                    )}
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>) : <Skeleton
                    variant='rectangle'
                    animation='wave'
                    width={500}
                    height={500} />}
            </section>

        </>
    )
}

export default Slider