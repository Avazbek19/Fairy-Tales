import React from 'react'
import { useState, useEffect } from 'react'
import puzzles from '../../repository/puzzles'
import PuzzleComponent from '../../components/puzzleComponents/puzzleComponent'
export default function Puzzle() {
  const [puzzleList, setPuzzleList] = useState([])
  const [loading, setloading] = useState(false)

  async function gettingPuzzle() {
    setloading(true)
    const currentPuzzle = await puzzles.getPuzzleList()
    setPuzzleList(currentPuzzle)
    setloading(false)
  }
  useEffect(() => {
    gettingPuzzle()
  }, [])
  return (
    (loading) ?
      <div className="spinner">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      :
      <PuzzleComponent item={puzzleList} />
  )
}
