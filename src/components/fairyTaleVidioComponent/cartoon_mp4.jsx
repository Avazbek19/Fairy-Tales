import React from 'react'
import { useLocation } from 'react-router-dom'
import './cartoon_mp4.css'

export default function Cartoon_mp4() {
    const { state } = useLocation()
    // console.log(state);
    return (
        <section className='vidio_section'>
            <div>
                <video controls preload='https://mbn-1.com/static/preload.js' width='100%'>
                    <source src={state} type='video/mp4' />
                </video>
            </div>
        </section>
    )
}