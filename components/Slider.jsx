'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation, Pagination } from 'swiper/modules'
import Hero from './HeroSection'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const Slider = () => {
  return (
    <div className="containe mx-auto">
            <Swiper
                navigation
                autoplay={{ delay: 4000, disableOnInteraction: true}}
                pagination={{ clickable: true}}
                modules={[Navigation, Pagination, Autoplay]}
                className='w-full'
            >
                {/* {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex h-full w-full items-center justify-center">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                className='block h-full w-full object-cover'
                            />
                        </div>
                    </SwiperSlide>
                ))} */}
                <SwiperSlide><Hero /></SwiperSlide>
                <SwiperSlide>
                    <Image
                        src='/images/banner2.jpg'
                        alt=""
                        className="object-fill md:object-cover h-[400px] md:h-[650px] w-full"
                        width={0}
                        height={0}
                        size='100vw'
                        priority={true}
                        unoptimized
                    />
                </SwiperSlide>
            </Swiper>
        </div>
  )
}
export default Slider