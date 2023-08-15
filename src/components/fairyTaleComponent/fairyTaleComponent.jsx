import React from 'react'
import { useNavigate } from 'react-router-dom';
// import './fairy_tales.css';


export default function FairyTaleComponent(category) {
    // console.log("item =>", category);
    const navigate = useNavigate()

    function Send(params) {
        navigate(`/video/${params.id}`, {
            state: params.video
        })
    }
    return (
        <div className="carousels_section">
            <div className="some_carousels">
                {
                    category.length > 0 && category.map((item, index) => {
                        return (
                            (index == 0) ?
                                <div key={index} className="uz_title">
                                    <p className="title_tales">{item.name}</p>
                                    <div className="box_carousel">
                                        {
                                            item.data.length > 0 ?
                                                item.data.map(items => {
                                                    return (
                                                        <button onClick={() => { Send(items) }} className="carousel_box">
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
                                                            <button onClick={() => { Send(items) }} className="carousel_boxes" >
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
                                                            <button onClick={() => { Send(items) }} className="carousel_box">
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
    )
}
