import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import home from '../../assets/Vector.png'
import audio from '../../assets/vector1.png'
import film from '../../assets/Vector2.png'
import star from '../../assets/Vector3.png'
import './navbar.css'
import './navbar_media.css'

export default function Navbar() {
    const [openToggle, SetOpenToggle] = useState(false)
    const toggleMenu = () => {
        SetOpenToggle(!openToggle)
    }
    return (
        <div className="main-nav">
            <div className="navbar">
                <a className="nav_icon" href='/'>
                    <img className='w-100' src={logo} alt="logo" />
                </a>
                <div className={`nav_menu ${openToggle ? 'open' : ''}`}>
                    <ul className='list-unstyled d-flex'>
                        <li className='nav_menu_item nav_icon_item_home'>
                            <a className='link_icon home_icon' href="/">
                                <img src={home} alt="home icon" />
                            </a>
                            <a className='link_text' href="/">Ertaklar</a>
                        </li>
                        <li className='nav_menu_item nav_icon_item_tv'>
                            <a className='link_icon' href="/audio-ertaklar">
                                <img src={audio} alt="tv icon" />
                            </a>
                            <a className='link_text' href="/audio-ertaklar">Audio Ertaklar</a>
                        </li>
                        <li className='nav_menu_item nav_icon_item_movie'>
                            <a className='link_icon' href="/topishmoqlar">
                                <img src={film} alt="movie icon" />
                            </a>
                            <a className='link_text' href="/topishmoqlar">Topishmoqlar</a>
                        </li>
                        <li className='nav_menu_item nav_icon_item_star'>
                            <a className='link_icon' href="/multifilmlar">
                                <img src={star} alt="star icon" />
                            </a>
                            <a className='link_text' href="/multifilmlar">Multfilmlar</a>
                        </li>
                        <li className='nav_menu_item nav_icon_item_star1'>
                            <a className='link_icon' href="/yangiliklar">
                                <img src={star} alt="star icon" />
                            </a>
                            <a className='link_text' href="/yangiliklar">Yangiliklar</a>
                        </li>
                    </ul>
                </div>
            </div>
            <button className='toggle-btn' onClick={toggleMenu}>
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    )
}