// About.jsx
import React from 'react';
import aboutCSS from './../About/About.module.css'
import aboutImg from './../../assets/images/about-one.png'


const About = () => {
    return (
        <div className={`${aboutCSS.about_wrapper} section`}>

            <div className={aboutCSS.about_img}>
                <img src={aboutImg} alt="about-img" />
            </div>
            <div className={aboutCSS.about_content}>
                <small className='text-lg font-semibold'>The Royal Hotel</small>
                <h2 className='section_title text-3xl font-bold'>Where Elegance Meets <span className='text-orange-500'>Excellance</span></h2>
                <p className={aboutCSS.about_para}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, consequuntur soluta consequatur, vel reiciendis voluptatum placeat eius eos non nesciunt</p>

                <div className={`${aboutCSS.card} `}>
                    <p className='border border-orange-500 text-3xl text-center rounded-lg font-bold'>250+ <br></br> <span className='text-base'>Awards Wins</span></p>
                    <p className='border border-orange-500 text-3xl text-center rounded-lg font-bold'>250k+ <br></br><span className='text-base'>Visitors Visits</span></p>
                    <p className='border border-orange-500 text-3xl text-center rounded-lg font-bold'>50k+ <br></br><span className='text-base'>Events</span></p>
                </div>
            </div>
            

        </div>
    );
};

export default About;