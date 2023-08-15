import React from 'react'
import Hero from '../../assets/Hero.png'
import logo from '../../assets/logo2.png'
import './home.css'

export default function HomeComponent() {
    return (
        <div>
            <div className="home">
                <div className="bg_img">
                    <img className='w-100' src={Hero} alt="img hero" />
                </div>
                <div className="header-content">
                    <div className="content_img">
                        <img className='w-100' src={logo} alt="logo header" />
                    </div>
                    <div className="content_text">
                        <p className='hedaer_text'>La película de Disney y Pixar “Luca” está ambientada en un pueblo de la costa italiana y cuenta la historia de un adolescente que pasa un verano inolvidable lleno de aventuras junto con su nuevo amigo Alberto.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
