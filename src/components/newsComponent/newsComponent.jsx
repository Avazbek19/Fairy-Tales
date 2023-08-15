import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './newsComponent.css'

export default function NewsComponent(newsList) {
    const [currentPage, setCurrentPage] = useState(1)
    const recordsSPerPage = 4
    const lastIndex = currentPage * recordsSPerPage
    const firstIndex = lastIndex - recordsSPerPage
    const records = newsList.item.slice(firstIndex, lastIndex)
    const numberPage = Math.ceil(newsList.item.length / recordsSPerPage)
    const numbers = [...Array(numberPage + 1).keys()].slice(1)
    const navigate = useNavigate()

    function prePage() {
        if (currentPage !== firstIndex) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changeBtn(itm) {
        setCurrentPage(itm)
    }

    function nextPage() {
        if (currentPage !== lastIndex) {
            setCurrentPage(currentPage + 1)
        }
    }

    function send(item) {
        navigate(`/yangilik/${item.name}`,{
            state: item
        })
    }

    useEffect(() => {}, [currentPage])
    return (
        <section className='news-main'>
            <div className="news-item-box">
                <div className="news-content-box">
                    {
                        records && records.map((item, index) => {
                            return (
                                <div key={index} className="news-content-boxes">
                                    <p className='news-content-box-title'>{item.name}</p>
                                    <div className='news-content-box-items'>
                                        <i class="bi bi-calendar4-range calendar-icon"></i>
                                        <span className='calendar-date'>{item.created_at}</span>
                                    </div>
                                    <p className='news-content-box-text'>{item.description.slice(0, 290)}</p>
                                    <button onClick={()=> send(item)} className='news-content-box-btn'>
                                        <svg width="59" height="15" viewBox="0 0 59 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="31.4723" y1="7.30695" x2="23.3278" y2="14.3776" stroke="white" />
                                            <line x1="23.3293" y1="0.623712" x2="31.3293" y2="7.62371" stroke="white" />
                                            <line x1="23.486" y1="7.31543" x2="15.3415" y2="14.3861" stroke="white" />
                                            <line x1="15.3429" y1="0.632196" x2="23.3429" y2="7.6322" stroke="white" />
                                            <line y1="-0.5" x2="10.5432" y2="-0.5" transform="matrix(-0.741791 0.670631 -0.640325 -0.768104 15.0005 6.93787)" stroke="white" />
                                            <line y1="-0.5" x2="10.5432" y2="-0.5" transform="matrix(-0.741791 0.670631 -0.640325 -0.768104 57.9863 6.92938)" stroke="white" />
                                            <line y1="-0.5" x2="10.393" y2="-0.5" transform="matrix(0.739159 0.673531 -0.643294 0.765619 7.17969 1.00848)" stroke="white" />
                                            <line y1="-0.5" x2="10.393" y2="-0.5" transform="matrix(0.739159 0.673531 -0.643294 0.765619 50.1655 1)" stroke="white" />
                                            <line y1="-0.5" x2="10.5432" y2="-0.5" transform="matrix(-0.741791 0.670631 -0.640325 -0.768104 8.27832 6.93787)" stroke="white" />
                                            <line y1="-0.5" x2="10.5432" y2="-0.5" transform="matrix(-0.741791 0.670631 -0.640325 -0.768104 51.2646 6.92938)" stroke="white" />
                                            <line y1="-0.5" x2="10.393" y2="-0.5" transform="matrix(0.739159 0.673531 -0.643294 0.765619 0.45752 1.00848)" stroke="white" />
                                            <line y1="-0.5" x2="10.393" y2="-0.5" transform="matrix(0.739159 0.673531 -0.643294 0.765619 43.4438 1)" stroke="white" />
                                            <line y1="-0.5" x2="10.5432" y2="-0.5" transform="matrix(-0.741791 0.670631 -0.640325 -0.768104 44.543 6.92944)" stroke="white" />
                                            <line y1="-0.5" x2="10.393" y2="-0.5" transform="matrix(0.739159 0.673531 -0.643294 0.765619 36.7222 1.00006)" stroke="white" />
                                            <line y1="-0.5" x2="10.5432" y2="-0.5" transform="matrix(-0.741791 0.670631 -0.640325 -0.768104 37.8208 6.92944)" stroke="white" />
                                            <line y1="-0.5" x2="10.393" y2="-0.5" transform="matrix(0.739159 0.673531 -0.643294 0.765619 30 1.00006)" stroke="white" />
                                        </svg>
                                    </button>
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
                                numbers.map((itm, inx) => {
                                    return (
                                        <button onClick={() => changeBtn(itm)} key={inx} className={`number-btn btn-groups ${currentPage === itm ? 'active' : ''}`}><span>{itm}</span></button>
                                    )
                                })
                            }
                            <button onClick={nextPage} className='arrow-btn btn-groups'>
                                <i class="bi bi-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="news-advertising"></div>
            </div>
        </section>
    )
}
