import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { ordered, restocked } from './icecreamSlice'

export const IcecreamView = () => {
  const [value, setValue] = useState(1)
  const numOfIcecreams = useAppSelector(state => state.icecream.numOfIcecreams)
  const dispatch = useAppDispatch()

  const handleOrder = () => {
    if (numOfIcecreams > 0) {
      dispatch(ordered())
    } else {
      alert('Out of stock! Please restock first.')
    }
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>Ice Creams Available: {numOfIcecreams}</h3>
      <button 
        onClick={handleOrder}
        className="App-button order-button"
      >
        Order Ice Cream
      </button>
      <div style={{ marginTop: '20px' }}>
        <input
          type='number'
          value={value}
          onChange={e => setValue(parseInt(e.target.value))}
          className="App-input"
        />
        <button 
          onClick={() => dispatch(restocked(value))}
          className="App-button restock-button"
        >
          Restock
        </button>
      </div>
    </div>
  )
}
