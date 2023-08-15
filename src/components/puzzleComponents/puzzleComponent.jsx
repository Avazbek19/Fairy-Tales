import React from 'react'
import { useState, useEffect } from 'react';
import line from '../../assets/Line 7.png'
import './puzzleComponent.css'

export default function PuzzleComponent(puzzleList) {
    const [currentPage, setCurrentPage] = useState(1)
    const recordsSPerPage = 3
    const lastIndex = currentPage * recordsSPerPage
    const firstIndex = lastIndex - recordsSPerPage
    const records = puzzleList.item.slice(firstIndex, lastIndex)
    const numberPage = Math.ceil(puzzleList.item.length / recordsSPerPage)
    const numbers = [...Array(numberPage + 1).keys()].slice(1)

    function prePage() {
        if(currentPage !== firstIndex) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changeBtn(itm) {
        setCurrentPage(itm)
    }

    function nextPage() {
        if(currentPage !== lastIndex) {
            setCurrentPage(currentPage + 1)
        }
    }

    useEffect(()=>{},[currentPage])
    return (
        <section className='puzzle-main'>
            {
                records && records.map((items, index) => {
                    return (
                        <div key={index} className="puzzle">
                            <div className="puzzle-child" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                <div className="up-svg">
                                    <svg width="108" height="105" viewBox="0 0 108 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="85" y1="0.00961494" x2="84" y2="104.01" stroke="white" stroke-width="2" />
                                        <line x1="107.992" y1="23.883" x2="0.992751" y2="23.883" stroke="white" stroke-width="2" />
                                    </svg>
                                </div>
                                <div className="puzzle-content">
                                    <p className='puzzle-content-text'>{items.content}</p>
                                    <span className='puzzle-answer'>Javobi:  </span>
                                    <span className='puzzle-answer-text'>{items.answer}</span>
                                </div>
                                <div className="down-svg">
                                    <svg width="104" height="105" viewBox="0 0 104 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="37" y1="0.00961494" x2="36" y2="104.01" stroke="white" stroke-width="2" />
                                        <line x1="104" y1="74" x2="-7.5079e-08" y2="74" stroke="white" stroke-width="2" />
                                    </svg>
                                </div>
                            </div>
                            <div className="line">
                                <img className='w-100' src={line} alt="line" />
                            </div>
                        </div>
                    )
                })
            }
            <div className="paggination d-flex justify-content-center">
                <div className="button-group">
                    <button onClick={prePage} className='arrow-btn btn-groups'>
                        <i class="bi bi-arrow-left"></i>
                    </button>
                    {
                        numbers.map((itm, inx)=> {
                            return(
                                <button onClick={() => changeBtn(itm)} key={inx} className={`number-btn btn-groups ${currentPage === itm ? 'active' : ''}`}><span>{itm}</span></button>
                            )
                        })
                    }
                    <button onClick={nextPage} className='arrow-btn btn-groups'>
                        <i class="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>
    )
}
