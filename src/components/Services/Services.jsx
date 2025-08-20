// Services.jsx
import React from 'react';
import servicesCSS from './../Services/Services.module.css'

const Services = () => {
    return (
        <div className={`${servicesCSS.service_wrapper} section`}>
            <small className='section__heading'>Facilites</small>
            <h2 className='section__title'>Our Best <span>Services</span></h2>

            <div className={servicesCSS.services_cards}>

                <div className={servicesCSS.service_card}>
                    <i className="ri-hotel-line"></i>
                    <h3>Basic Facilities</h3>
                    <p>- Recaption /Front Desk</p>
                    <p>- Room Services</p>
                    <p>- House Keeping</p>
                    <p>- Wifi & Parking</p>
                </div>
                {/* --------- */}
                <div className={servicesCSS.service_card}>
                    <i className="ri-hotel-line"></i>
                    <h3>Room Aminities</h3>
                    <p>- Comfortable Bedding</p>
                    <p>- Bed Room and Pool</p>
                    <p>- TV and AC</p>
                    <p>- Bar</p>
                </div>
                {/* --------- */}
                <div className={servicesCSS.service_card}>
                    <i className="ri-goblet-line"></i>
                    <h3>Dining Option</h3>
                    <p>- Restaurant Cafe</p>
                    <p>- Bar & Lounge</p>
                    <p>- Cafe & Canteen</p>
                    <p>- Room Service</p>
                </div>
                {/* --------- */}
                <div className={servicesCSS.service_card}>
                    <i className="ri-restaurant-line"></i>
                    <h3>Special Feature</h3>
                    <p>- Custom Rooms</p>
                    <p>- Cricket Ground</p>
                    <p>- Cafe & Canteen</p>
                    <p>- Gym</p>
                </div>
                {/* --------- */}
            </div>
        </div>
    );
};

export default Services;