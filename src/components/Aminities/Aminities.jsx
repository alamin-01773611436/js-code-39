// Aminities.jsx
import React from "react";
import aminitiesCSS from "./Aminities.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import img1 from "./../../assets/images/pool.jpg";
import img2 from "./../../assets/images/gym.jpg";
import img3 from "./../../assets/images/rest.jpg";

function Aminities() {
    return(
        <div className={`${aminitiesCSS.aminitiesCSS_wrapper} section`}>
            <small className='section__heading'>Luxury Aminities</small>
            <h2 className='section__title'>Our Best <span>Aminities</span></h2>

            <Swiper
                slidePrevClass={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 1000,
                }}
                speed={2000}
                modules={[Autoplay]}

                className={aminitiesCSS.swiper}
            
            >

               <SwiperSlide>
                    <div className={aminitiesCSS.aminitiesCSS_item}>
                        <img src={img1} alt="aminities-img" />

                        <div className={aminitiesCSS.content}>
                            <h2>Swiming Pool</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non exercitationem incidunt itaque optio illo iusto magnam labore, quam earum vero minima? Corrupti consectetur quisquam laboriosam sed repellat sequi autem maiores?</p>
                            <button className="btn">Book Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                {/* -------- */}
               <SwiperSlide>
                    <div className={aminitiesCSS.aminitiesCSS_item}>
                        <img src={img2} alt="aminities-img" />

                        <div className={aminitiesCSS.content}>
                            <h2>GYM and Sports</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non exercitationem incidunt itaque optio illo iusto magnam labore, quam earum vero minima? Corrupti consectetur quisquam laboriosam sed repellat sequi autem maiores?</p>
                            <button className="btn">Book Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                {/* -------- */}
               <SwiperSlide>
                    <div className={aminitiesCSS.aminitiesCSS_item}>
                        <img src={img3} alt="aminities-img" />

                        <div className={aminitiesCSS.content}>
                            <h2>Restro and Cafe</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non exercitationem incidunt itaque optio illo iusto magnam labore, quam earum vero minima? Corrupti consectetur quisquam laboriosam sed repellat sequi autem maiores?</p>
                            <button className="btn">Book Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                {/* -------- */}
            </Swiper>
        </div>
    )
}


export default Aminities