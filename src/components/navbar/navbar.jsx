import React from 'react'
import './navbar.css'
import './navbar_media.css'

export default function Navbar() {
    return (
        <div className="main-nav">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-round">
                    <div className="container-fluid">
                        <a className="navbar-brand m-0 p-0 main-icon" href="#">
                            <img className='w-100' src="/logo.png" alt="logo" />
                        </a>
                        <div className="collapse navbar-collapse icons-base" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 icons-base-child">
                                <li className="nav-item">
                                    <a className="nav-link text-white d-flex align-items-center" href="#">
                                        <div className="for-img">
                                            <img className='home-icon' src="/vector.png" alt="home-icon" />
                                        </div>
                                        <div className="for-text">
                                            <p className='icon_text'>Ertaklar</p>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white d-flex align-items-center" href="#">
                                        <div className="for-img">
                                            <img className='w-100' src="/tv.png" alt="home-icon" />
                                        </div>
                                        <div className="for-text">
                                            <p className='icon_text'>Audio Ertaklar</p>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white d-flex align-items-center" href="#">
                                        <div className="for-img">
                                            <img className='w-100' src="/movie.png" alt="home-icon" />
                                        </div>
                                        <div className="for-text">
                                            <p className='icon_text'>Topishmoqlar</p>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white d-flex align-items-center" href="#">
                                        <div className="for-img">
                                            <img className='w-100' src="/star.png" alt="home-icon" />
                                        </div>
                                        <div className="for-text">
                                            <p className='icon_text'>Multfilmlar</p>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white d-flex align-items-center" href="#">
                                        <div className="for-img">
                                            <img className='w-100' src="/star.png" alt="home-icon" />
                                        </div>
                                        <div className="for-text">
                                            <p className='icon_text'>Yangiliklar</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <button className=" navbar-toggler border-success-subtle text-success-emphasis" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}