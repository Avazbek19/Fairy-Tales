import React, { useEffect } from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import play_icon from '../../assets/play_icon.png'
import './cartoonsComponent.css'

export default function CartoonsComponent(cartoonList) {
  const [currentPage, setCurrentPage] = useState(1)
  const recordsSPerPage = 12
  const lastIndex = currentPage * recordsSPerPage
  const firstIndex = lastIndex - recordsSPerPage
  const records = cartoonList.item.slice(firstIndex, lastIndex)
  const numberPage = Math.ceil(cartoonList.item.length / recordsSPerPage)
  const numbers = [...Array(numberPage + 1).keys()].slice(1)
  const navigate = useNavigate()

  console.log("records =>", records);

  function send(items) {
    navigate(`/multifilm/${items.name}`,{
      state: items
    })
  }

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

  useEffect(()=>{},[currentPage])
  return (
    <section className='main-cartoon'>
      <div className="cartoon-of-boxes">
        <div className="row">
          {
            records && records.map((items, index) => {
              return (
                <div className="col-4 mt-4 kol-4" key={index}>
                  <img className='cartoon-of-boxes-images' src={items.trailer} alt="" />
                  <div className='cartoon-of-boxes-content'>
                    <p className='cartoon-of-boxes-content-text-1'>{items.created_at}</p>
                    <p className='cartoon-of-boxes-content-text-2'>{items.name}</p>
                  </div>
                  <button onClick={() => send(items)} className='cartoon-of-boxes-btn'>
                    <img src={play_icon} alt="play btn icon" />
                  </button>
                </div>
              )
            })
          }
        </div>
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
      <div className="advertising"></div>
    </section>
  )
}