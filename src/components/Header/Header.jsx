import React from 'react';
import headerCSS from './Header.module.css'

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import { Autoplay, Parallax } from 'swiper/modules';

const Header = () => {
    return (
        <div>
            <div className={headerCSS.header_wrapper}>
                <Swiper
                    className={headerCSS.swiper}
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 2500
                    }}
                    modules={[Autoplay]}
                    speed={1500}
                >

                    <SwiperSlide>
                        <div className={`${headerCSS.header_slide} ${headerCSS.slide1}`}>
                            <div className={headerCSS.content}>
                                <small>Luxury Hotel & Resturent</small>
                                <h2>Enjoy your <span>Dream</span> Time <br></br><span>Luxury</span> Experience</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/*  */}
                    <SwiperSlide>
                        <div className={`${headerCSS.header_slide} ${headerCSS.slide2}`}>
                            <div className={headerCSS.content}>
                                <small>Luxury Hotel & Resturent</small>
                                <h2>Enjoy your <span>Dream</span> Time</h2>
                                <h2><span>Luxury</span> Experience</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/*  */}
                    <SwiperSlide>
                        <div className={`${headerCSS.header_slide} ${headerCSS.slide3}`}>
                            <div className={headerCSS.content}>
                                <small>Luxury Hotel & Resturent</small>
                                <h2>Enjoy your <span>Dream</span> Time <br></br><span>Luxury</span> Experience</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/*  */}
                </Swiper>
            </div>
        </div>
    );
};

export default Header;