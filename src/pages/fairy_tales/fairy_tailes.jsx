import React, { useState, useEffect } from 'react';
import Cartoons from '../../repository/cartoons';
import {useNavigate} from 'react-router-dom'
import './fairy_tales.css';


export default function FairyTales() {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate()
  let DataName;

  const cartoonGet = async () => {
    const GetDataCategory = await Cartoons.getCategory();
    DataName = GetDataCategory.results;
    getCategoryItem(GetDataCategory.results);
  };

  const getCategoryItem = async (array) => {
    const updatedCategory = await Promise.all(
      array.map(async (el) => {
        const GetData = await Cartoons.getCartoon(el.id);
        return { name: el.name, data: GetData.results }
      })
    );
    setTimeout(() => {
      setCategory(updatedCategory);
    }, 1000);
  }

  function send(params) {
    navigate(`/video/${params.id}` ,{
      state:params.video
    })
  }

  useEffect(() => {
    cartoonGet()
  }, []);

  return (
    <div className="carousels_section">
      <div className="some_carousels">
        {
          category && category.map((item, index) => {
            return (
              (index == 0) ?
                <div key={index} className="uz_title">
                  <p className="title_tales">{item.name}</p>
                  <div className="box_carousel">
                    {
                      item.data.length > 0 ?
                        item.data.map(items => {
                          return (
                            <button onClick={()=>{send(items)}} className="carousel_box" data-aos="zoom-in-up">
                              <div className="img-boxes">
                                <img className='carousel_img' src={items.trailer} alt={items.name} />
                              </div>
                              <div className="content-name">
                                <p className='img-names'>{items.name}</p>
                              </div>
                            </button>
                          )
                        })
                        :
                        <p className='no-item'>Malumot yo'q</p>
                    }
                  </div>
                </div>
                : (index == 1) ?
                  <div key={index} className="euro_title">
                    <p className="title_tales">{item.name}</p>
                    <div className="box_carousel">
                      {
                        item.data.length > 0 ?
                          item.data.map(items => {
                            return (
                              <button onClick={()=>{send(items)}} className="carousel_boxes" data-aos="zoom-in-up">
                                <div className="img-box">
                                  <img className='carousel_img' src={items.trailer} alt={items.name} />
                                </div>
                                <div className="content-name">
                                  <p className='img-name'>{items.name}</p>
                                </div>
                              </button>
                            )
                          })
                          :
                          <p className='no-item'>Malumot yo'q</p>
                      }
                    </div>
                  </div>
                  :
                  <div key={index} className="other_title">
                    <p className="title_tales">{item.name}</p>
                    <div className="box_carousel">
                      {
                        item.data.length > 0 ?
                          item.data.map(items => {
                            return (
                              <button onClick={()=>{send(items)}} className="carousel_box" data-aos="zoom-in-up">
                                <div className="img-boxes">
                                  <img className='carousel_img' src={items.trailer} alt={items.name} />
                                </div>
                                <div className="content-name">
                                  <p className='img-names'>{items.name}</p>
                                </div>
                              </button>
                            )
                          })
                          :
                          <p className='no-item'>Malumot yo'q</p>
                      }
                    </div>
                  </div>
            )
          })
        }
      </div>
    </div>
  );
}