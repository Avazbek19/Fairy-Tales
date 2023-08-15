import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import play from '../../assets/play_icon.png'
import './audio.css'


export default function AudioComponent(audioTale) {
    const [audio, setAudio] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const handleButtonClick = (item) => {
        setIsModalOpen(true);
        setAudio(item)
    }
    return (
        <div className='audio_tales'>
            <div className="">
                {
                    audioTale && audioTale.item.map((item, id) => {
                        return (
                            <div key={id} className="box_of_mp3">
                                <Link to={`/info_by_id/${item.id}`} className="img_for_mp3" data-aos="flip-left">
                                    <img className='w-100' src={item.image} alt={item.name} />
                                </Link>
                                <div className="play_btn">
                                    <button className='play_audio' onClick={() => handleButtonClick(item.audio)}>
                                        <img src={play} alt="icon" />
                                        <span className='play_btn_text'>play</span>
                                    </button>
                                </div>
                                <div className="title_mp3_box">
                                    <p className='title_mp3'>{item.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
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
        </div>
    )
}
