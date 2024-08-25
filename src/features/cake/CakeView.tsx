import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { ordered, restocked } from './cakeSlice'

export const CakeView = () => {
  const numOfCakes = useAppSelector(state => state.cake.numOfCakes)
  const dispatch = useAppDispatch()
  const [restockAmount, setRestockAmount] = useState(1)

  const handleOrder = () => {
    if (numOfCakes > 0) {
      dispatch(ordered())
    } else {
      alert('Out of stock! Please restock first.')
    }
  }

  const handleRestock = () => {
    if (restockAmount <= 10) {
      dispatch(restocked(restockAmount))
    } else {
      alert('You can restock 10 or less than 10 in one time.')
    }
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>Cakes Available: {numOfCakes}</h3>
      <button 
        onClick={handleOrder}
        className="App-button order-button"
      >
        Order Cake
      </button>
      <div style={{ marginTop: '20px' }}>
        <input
          type='number'
          value={restockAmount}
          onChange={e => setRestockAmount(parseInt(e.target.value))}
          className="App-input"
        />
        <button 
          onClick={handleRestock}
          className="App-button restock-button"
        >
          Restock Cakes
        </button>
      </div>
    </div>
  )
}
