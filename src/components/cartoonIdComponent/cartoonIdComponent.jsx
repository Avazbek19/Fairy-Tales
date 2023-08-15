import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import play_icon from '../../assets/play_icon.png'
import soul_img from '../../assets/soul_cartun.png'
import './cartoonIdComponent.css'


export default function CartoonIdComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [audio, setAudio] = useState([])
  const { state } = useLocation()

  const handleButtonClick = (vidio) => {
    setIsModalOpen(true);
    setAudio(vidio)
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }
  console.log('state =>', state);
  return (
    <section className='cartoons-by-id-main'>
      <p className='cartoons-by-id-title'>{state.name}</p>
      <div className="cartoons-by-id-top">
        <div className="catoons-by-id-img">
          <img className='catoons-by-id-images' src={state.trailer} alt="" />
        </div>
        <div className="cartoons-by-id-contents">
          <button onClick={() => handleButtonClick(state.video)} className='cartoons-by-id-contents-btn'>
            <img src={play_icon} alt="play icon" />
            <span>Ko'rish</span>
          </button>
          <p>{state.description}</p>
        </div>
      </div>
      <div className="carousels mt5 mb5">
        <div className="same_title">
          <p className='title_tales'>O'xshash ertaklar</p>
          <div class="box_carousel_info">
            <a class="carousel_boxes_info" href='/'>
              <img className='carousel_img_info' src={soul_img} alt="img" />
            </a>
            <a class="carousel_boxes_info" href='/'>
              <img className='carousel_img_info' src={soul_img} alt="img" />
            </a>
            <a class="carousel_boxes_info" href='/'>
              <img className='carousel_img_info' src={soul_img} alt="img" />
            </a>
            <a class="carousel_boxes_info" href='/'>
              <img className='carousel_img_info' src={soul_img} alt="img" />
            </a>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="text-center">
              <video width={"300px"} controls src={audio}></video>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
