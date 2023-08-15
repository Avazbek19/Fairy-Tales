import React from 'react'
import { useState } from 'react'
import soul_img from '../../assets/soul_cartun.png'
import play from '../../assets/play_icon.png'
import './info_id.css'


export default function IdAudioComponent(audioByID) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [audio, setAudio] = useState([])

    const handleButtonClick = (audio) => {
        setIsModalOpen(true);
        setAudio(audio)
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='main_info'>
            <div className="top_part">
                {
                    <div className="content_info_img">
                        <img className='w-100' src={audioByID.item.image} alt="img" />
                    </div>
                }
                {
                    <div className="content_info_text">
                        <div className="content_info_text_item_1">
                            <div className='audio_btn_div'>
                                <button className='play_audio' onClick={() => handleButtonClick(audioByID.item.audio)}>
                                    <img src={play} alt="icon" />
                                    <span className='play_btn_text'>read to me</span>
                                </button>
                            </div>
                            <div className='audio_content_div'>
                                <p className='content_info_id'>{audioByID.item.description}</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
            {
                <div className="down_part">
                    <p className='info_title'>{audioByID.item.name}</p>
                    <p className='info_text p1'>{audioByID.item.description}</p>
                </div>
            }
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
                            <audio controls src={audio}></audio>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
