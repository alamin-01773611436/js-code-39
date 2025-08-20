// Nav.jsx

import React, { useRef } from 'react';
import navCSS from './Nav.module.css'

const Nav = () => {

    const menu = useRef();
    const navbar = useRef();
    const menuHandle = () => {
        menu.current.classList.toggle(navCSS.showNav)
    }

    window.addEventListener("scroll", function() {
        if(window.scrollY > 100) {
            navbar.current.classList.add(navCSS.navbarScroll);
        } else {
            navbar.current.classList.remove(navCSS.navbarScroll)
        }
    })

    return (
        <div className={navCSS.nav_wrapper} ref={navbar}>
            <div className={navCSS.logo}>
                <a href="#"><span>Alami</span>n</a>
            </div>
            
            <ul ref={menu}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Category</a></li>
                <li><a href="#">Rooms</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Blogs</a></li>
            </ul>

            <div className={navCSS.nav_btns}>
                <button className={navCSS.nav_btn}>Book Now</button>
                <i id={navCSS.bars} onClick={menuHandle} className='ri-menu-4-line'></i>
            </div>



        </div>
    );
};

export default Nav;