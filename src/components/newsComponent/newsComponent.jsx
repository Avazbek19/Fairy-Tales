import React from 'react'
import './newsComponent.css'

export default function NewsComponent() {
  return (
    <section className='news-main'>
        <div className="news-item-box">
            <div className="news-content-box">
                <div className="news-content-boxes">
                    <p className='news-content-box-title'>Chopon yigitcha</p>
                    <i class="bi bi-calendar4-range"></i>
                    <span>11.08.2023</span>
                </div>
            </div>
            <div className="news-advertising"></div>
        </div>
    </section>
  )
}
