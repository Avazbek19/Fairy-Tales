import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './fairy_tales.css'
import './fairy_media.css'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

export default function FairyTailes() {
  return (
    <div className="carousels_section">
      <div className="uz_title">
        <p className='title_tales'>O’zbek xalq ertaklari</p>
        <div class="box_carousel">
          <a class="carousel_boxes" href='/'>
            <img src="/def5.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/def4.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/def3.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/def2.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/def1.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/def5.png" alt="img" />
          </a>
        </div>
      </div>
      <div className="euro_title">
        <p className='title_tales'>Jahon xalq ertaklari</p>
        <div class="box_carousel">
          <a class="carousel_boxes" href='/'>
            <img src="/big5.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/big4.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/big3.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/big2.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/big1.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/big5.png" alt="img" /> 
          </a>
        </div>
      </div>
      <div className="east_title">
        <p className='title_tales'>Sharq xalq ertaklari</p>
        <div class="box_carousel">
          <a class="carousel_boxes" href='/'>
            <img src="/default1.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/default1.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/default1.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/default1.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/default1.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/default1.png" alt="img" /> 
          </a>
        </div>
      </div>
      <div className="east_title">
        <p className='title_tales'>Rus xalq ertaklari</p>
        <div class="box_carousel">
          <a class="carousel_boxes" href='/'>
            <img src="/default2.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/default2.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/default2.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/default2.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/default2.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/default2.png" alt="img" /> 
          </a>
        </div>
      </div>
      <div className="doc_title">
        <p className='title_tales'>Docuseries</p>
        <div class="box_carousel">
          <a class="carousel_boxes" href='/'>
            <img src="/default3.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/default3.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/default3.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/default3.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/default3.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/default3.png" alt="img" /> 
          </a>
        </div>
      </div>
      <div className="infin_title">
        <p className='title_tales'>Infantil</p>
        <div class="box_carousel">
          <a class="carousel_boxes" href='/'>
            <img src="/default.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/default.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/default.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/default.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/default.png" alt="img" />
          </a>
          <a class="carousel_boxes" href='/'>
            <img src="/default.png" alt="img" /> 
          </a>
        </div>
      </div>
    </div>
  )
}