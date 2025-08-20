// Room.jsx
// import React from "react";
import roomsCSS from "./Room.module.css";
import "remixicon/fonts/remixicon.css";



function Rooms() {
    return(
        <div className={`${roomsCSS.Rooms_container} section`}>
            <small className='section__heading'>Luxury Swites</small>
            <h2 className='section__title'>Our Best <span>Rooms</span></h2>

            <div className={roomsCSS.cards}>
                <div className={roomsCSS.cards_container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.card_front} ${roomsCSS.card_front1}`}>
                            <button className="btn">Junior Suite</button>
                        </div>
                        <div className={roomsCSS.card_back}>
                            <div className={roomsCSS.price}>
                                <p>$120/N</p>
                            </div>
                            <div className={roomsCSS.card_content}>
                                <h3>Junior Suite</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - Wifi & Parking</p>

                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button className="btn">Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.cards_container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.card_front} ${roomsCSS.card_front2}`}>
                            <button className="btn">Twin Room</button>
                        </div>
                        <div className={`${roomsCSS.card_back} ${roomsCSS.card_back2}`}>
                            <div className={roomsCSS.price}>
                                <p>$130/N</p>
                            </div>
                            <div className={roomsCSS.card_content}>
                                <h3>Junior Suite</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - Wifi & Parking</p>

                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button className="btn">Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.cards_container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.card_front} ${roomsCSS.card_front3}`}>
                            <button className="btn">Quad Room</button>
                        </div>
                        <div className={`${roomsCSS.card_back} ${roomsCSS.card_back3}`}>
                            <div className={roomsCSS.price}>
                                <p>$150/N</p>
                            </div>
                            <div className={roomsCSS.card_content}>
                                <h3>Junior Suite</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - Wifi & Parking</p>

                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button className="btn">Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.cards_container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.card_front} ${roomsCSS.card_front4}`}>
                            <button className="btn">Parsonal Room</button>
                        </div>
                        <div className={`${roomsCSS.card_back} ${roomsCSS.card_back4}`}>
                            <div className={roomsCSS.price}>
                                <p>$120/N</p>
                            </div>
                            <div className={roomsCSS.card_content}>
                                <h3>Junior Suite</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - Wifi & Parking</p>

                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button className="btn">Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.cards_container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.card_front} ${roomsCSS.card_front5}`}>
                            <button className="btn">Relux Room</button>
                        </div>
                        <div className={`${roomsCSS.card_back} ${roomsCSS.card_back5}`}>
                            <div className={roomsCSS.price}>
                                <p>$160/N</p>
                            </div>
                            <div className={roomsCSS.card_content}>
                                <h3>Junior Suite</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - Wifi & Parking</p>

                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button className="btn">Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.cards_container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.card_front} ${roomsCSS.card_front6}`}>
                            <button className="btn">Sleeping Room</button>
                        </div>
                        <div className={`${roomsCSS.card_back} ${roomsCSS.card_back6}`}>
                            <div className={roomsCSS.price}>
                                <p>$120/N</p>
                            </div>
                            <div className={roomsCSS.card_content}>
                                <h3>Junior Suite</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - Wifi & Parking</p>

                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button className="btn">Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms