import React from 'react'
import './home.css'
import './home_media.css'
import FairyTailes from '../fairy tales/fairy_tailes'

export default function HomePage() {
  return (
    <>
        <div className='main-home'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-9 col-lg-6 content">
                        <img className='content_img' src="/logo2.png" alt="logo" />
                        <p className='header-text'>La película de Disney y Pixar “Luca” está ambientada en un pueblo de la costa italiana y cuenta la historia de un adolescente que pasa un verano inolvidable lleno de aventuras junto con su nuevo amigo Alberto.</p>
                    </div>
                </div>
            </div>
        </div>
        <FairyTailes/>
    </>
  )
}