// Testimonials
import React from "react";
import testimonialsCSS from "./Testimonials.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import img1 from "./../../assets/images/testi-01.jpg";
import img2 from "./../../assets/images/testi-03.jpg";
import img3 from "./../../assets/images/testi-04.jpg";


const Testimonials = () => {
    return(
        <div className={`${testimonialsCSS.testimonialsCSS_wrapper} section`}>
            <small className='section__heading'>Testimonials</small>
            <h2 className='section__title'>What Our Client <span>Says</span></h2>

            <Swiper
            slidePrevClass={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay: 1000
            }}
            // breakpoints={{
            //     0: {
            //         slidesPerView: 1
            //     },
            //     768: {
            //         slidesPerView: 2
            //     }
            // }}
            speed={2000}
            modules={[Autoplay]}

            className={testimonialsCSS.swiper}
            >

                <SwiperSlide>
                    <div className={testimonialsCSS.testimonial}>
                        <img src={img1} alt="testi-01" />
                        <div className={testimonialsCSS.content}>
                            <h3>Samantha <span>Managar</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti blanditiis itaque vel repellendus laudantium possimus autem praesentium adipisci quia alias aut, officiis perspiciatis? Vel, laborum veniam. Repellat, commodi ut.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialsCSS.testimonial}>
                        <img src={img2} alt="testi-02" />
                        <div className={testimonialsCSS.content}>
                            <h3>Jhon Doe <span>Sals CEO</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti blanditiis itaque vel repellendus laudantium possimus autem praesentium adipisci quia alias aut, officiis perspiciatis? Vel, laborum veniam. Repellat, commodi ut.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialsCSS.testimonial}>
                        <img src={img3} alt="testi-03" />
                        <div className={testimonialsCSS.content}>
                            <h3>Monika <span>Full Controler</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti blanditiis itaque vel repellendus laudantium possimus autem praesentium adipisci quia alias aut, officiis perspiciatis? Vel, laborum veniam. Repellat, commodi ut.</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}


export default Testimonials