import React from 'react'
import './navbar.css'
import './navbar_media.css'

export default function Navbar() {
    return (
        <div className="main-nav">
            <div className="navbar">
                <a className="nav_icon" href='/'>
                    <img className='w-100' src="/logo.png" alt="logo" />
                </a>
                <div className="nav_menu">
                    <ul className='list-unstyled d-flex'>
                        <li className='nav_menu_item nav_icon_item_home'>
                            <a className='link_icon home_icon' href="">
                                <img src="/vector.png" alt="home icon" />
                            </a>
                            <a className='link_text' href="">Ertaklar</a>
                        </li>
                        <li className='nav_menu_item nav_icon_item_tv'>
                            <a className='link_icon' href="">
                                <img src="/vector1.png" alt="tv icon" />
                            </a>
                            <a className='link_text' href="">Audio Ertaklar</a>
                        </li>
                        <li className='nav_menu_item nav_icon_item_movie'>
                            <a className='link_icon' href="">
                                <img src="/vector2.png" alt="movie icon" />
                            </a>
                            <a className='link_text' href="">Topishmoqlar</a>
                        </li>
                        <li className='nav_menu_item nav_icon_item_star'>
                            <a className='link_icon' href="">
                                <img src="/vector3.png" alt="star icon" />
                            </a>
                            <a className='link_text' href="">Multfilmlar</a>
                        </li>
                        <li className='nav_menu_item nav_icon_item_star1'>
                            <a className='link_icon' href="">
                                <img src="/vector3.png" alt="star icon" />
                            </a>
                            <a className='link_text' href="">Yangiliklar</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}