import React from 'react'
import './home.css'
import './home_media.css'
import Navbar from '../../components/navbar/navbar'
import FairyTailes from '../fairy tales/fairy_tailes'
import Footer from '../../components/footer/footer'

export default function HomePage() {
    return (
        <div className=''>
            <Navbar/>
            <div className="home">
                <div className="bg_img">
                    <img className='w-100' src="/Hero.png" alt="img heero" />
                </div>
                <div className="header-content">
                    <div className="content_img">
                        <img className='w-100' src="logo2.png" alt="logo header" />
                    </div>
                    <div className="content_text">
                        <p className='hedaer_text'>La película de Disney y Pixar “Luca” está ambientada en un pueblo de la costa italiana y cuenta la historia de un adolescente que pasa un verano inolvidable lleno de aventuras junto con su nuevo amigo Alberto.</p>
                    </div>
                </div>
            </div>
            <FairyTailes/>        
        </div>
    )
}