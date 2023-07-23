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
};

export default function FairyTailes() {
  return (
    <div className="main-carousels py-3">
        <div className='carousel px-1'>
          <p className='title_fairy'>O’zbek xalq ertaklari</p>
          <Carousel responsive={responsive} draggable={true} swipeable={true} arrows={true} dotListClass={true} >
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/def1.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/def1.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/def1.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/def1.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/def1.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/def1.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/def1.png" alt="" />
              </div>
          </Carousel>
        </div>
        <div className="carousel">
          <p className='title_fairy'>Jahon xalq ertaklari</p>
          <Carousel responsive={responsive} draggable={true} swipeable={true} arrows={true} dotListClass={true} >
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/big5.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/big5.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/big5.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/big5.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/big5.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/big5.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/big5.png" alt="" />
              </div>
          </Carousel>
        </div>
        <div className="carousel">
          <p className='title_fairy'>Sharq xalq ertaklari</p>
          <Carousel responsive={responsive} draggable={true} swipeable={true} arrows={true} dotListClass={true} >
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default1.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default1.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default1.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default1.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default1.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default1.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default1.png" alt="" />
              </div>
          </Carousel>
        </div>
        <div className="carousel">
          <p className='title_fairy'>Rus xalq ertaklari</p>
          <Carousel responsive={responsive} draggable={true} swipeable={true} arrows={true} dotListClass={true} >
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default2.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default2.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default2.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default2.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default2.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default2.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default2.png" alt="" />
              </div>
          </Carousel>
        </div>
        <div className="carousel">
          <p className='title_fairy'>Docuseries</p>
          <Carousel responsive={responsive} draggable={true} swipeable={true} arrows={true} dotListClass={true} >
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default3.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default3.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default3.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default3.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default3.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default3.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default3.png" alt="" />
              </div>
          </Carousel>
        </div>
        <div className="last_carousel">
          <p className='title_fairy'>Infantil</p>
          <Carousel responsive={responsive} draggable={true} swipeable={true} arrows={true} dotListClass={true} >
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default.png" alt="" />
              </div>
              <div className='responsive-img mx-sm-0 px-2 '>
                  <img className='w-100' src="/default.png" alt="" />
              </div>
          </Carousel>
        </div>
    </div>
  )
}
