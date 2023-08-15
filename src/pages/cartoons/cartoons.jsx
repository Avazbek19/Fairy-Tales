import React, { useEffect, useState } from 'react'
import cartoons from '../../repository/cartoons'
import CartoonsComponent from '../../components/cartoonsComponent/cartoonsComponent'

export default function Cartoons() {
  const [cartoonList, setCartoonList] = useState([])
  const [loading, setloading] = useState(false)

  async function getCartoons() {
    setloading(true)
    const currentCartoon = await cartoons.getCartoonList()
    setCartoonList(currentCartoon)
    setloading(false)
  }

  useEffect(() => {
    getCartoons()
  }, [])

  return (
    (loading) ?
      <div className="spinner">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      :
      <CartoonsComponent item={cartoonList} />
  )
}