import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { CarasolInImages } from '../../constants/icons'
import { Box } from '@mui/material'
import './index.scss'


const ImageList = () => {
    const images = [
        { url: CarasolInImages['CarasolImgOne'] },
        { url: CarasolInImages['CarasolImgTwo'] }
    ]

    return (
        <Box className="container">
            <Swiper
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={false}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper container__swiper"
            >
                {
                    images.map((image, index) => {
                        return (
                            <SwiperSlide key={index} className="container__swiper__swiper-slide">
                                <img src={image.url} alt='carasol-img' className='container__swiper__swiper-slide__signinimg' />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </Box>
    )
}

export default ImageList

