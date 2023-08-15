import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import './newsByIdComponent.css'

export default function NewsByIdComponent() {
    const { state } = useLocation()
    console.log(state);
    return (
        <section className='news-by-id-main'>
            <Link className='back-to-pre-page' to={'/yangiliklar'}>
                <svg width="59" height="17" viewBox="0 0 59 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="27.6797" y1="8.48252" x2="35.9537" y2="1.56376" stroke="white" />
                    <line x1="35.698" y1="15.3152" x2="27.8289" y2="8.16843" stroke="white" />
                    <line x1="35.6651" y1="8.62168" x2="43.939" y2="1.70292" stroke="white" />
                    <line x1="43.6829" y1="15.4544" x2="35.8137" y2="8.30759" stroke="white" />
                    <line y1="-0.5" x2="10.5432" y2="-0.5" transform="matrix(0.754068 -0.656796 0.626008 0.779817 44.1421 9.15613)" stroke="white" />
                    <line y1="-0.5" x2="10.5432" y2="-0.5" transform="matrix(0.754068 -0.656796 0.626008 0.779817 1.16357 8.36951)" stroke="white" />
                    <line y1="-0.5" x2="10.393" y2="-0.5" transform="matrix(-0.726575 -0.687087 0.657345 -0.753589 51.8521 15.2291)" stroke="white" />
                    <line y1="-0.5" x2="10.393" y2="-0.5" transform="matrix(-0.726575 -0.687087 0.657345 -0.753589 8.87305 14.4426)" stroke="white" />
                    <line y1="-0.5" x2="10.5432" y2="-0.5" transform="matrix(0.754068 -0.656796 0.626008 0.779817 50.8633 9.28052)" stroke="white" />
                    <line y1="-0.5" x2="10.5432" y2="-0.5" transform="matrix(0.754068 -0.656796 0.626008 0.779817 7.88379 8.4939)" stroke="white" />
                    <line y1="-0.5" x2="10.393" y2="-0.5" transform="matrix(-0.726575 -0.687087 0.657345 -0.753589 58.5728 15.3535)" stroke="white" />
                    <line y1="-0.5" x2="10.393" y2="-0.5" transform="matrix(-0.726575 -0.687087 0.657345 -0.753589 15.5938 14.5669)" stroke="white" />
                    <line y1="-0.5" x2="10.5432" y2="-0.5" transform="matrix(0.754068 -0.656796 0.626008 0.779817 14.6045 8.61816)" stroke="white" />
                    <line y1="-0.5" x2="10.393" y2="-0.5" transform="matrix(-0.726575 -0.687087 0.657345 -0.753589 22.3145 14.6912)" stroke="white" />
                    <line y1="-0.5" x2="10.5432" y2="-0.5" transform="matrix(0.754068 -0.656796 0.626008 0.779817 21.3257 8.74243)" stroke="white" />
                    <line y1="-0.5" x2="10.393" y2="-0.5" transform="matrix(-0.726575 -0.687087 0.657345 -0.753589 29.0352 14.8156)" stroke="white" />
                </svg>
            </Link>
            <div className="news-by-id">
                <div className="news-by-id-box">
                    <div className="news-by-id-items">
                        <p className='news-by-id-items-title'>{state.name}</p>
                        <div className="news-by-id-date">
                            <i class="bi bi-calendar4-range calendar-icon"></i>
                            <span className='calendar-date'>{state.created_at}</span>
                        </div>
                        <p className='news-by-id-description'>{state.description}</p>
                    </div>
                    <p className='news-by-id-description mt-5'>{state.description}</p>
                </div>
                <div className="news-by-id-advertising"></div>
            </div>
        </section>
    )
}
