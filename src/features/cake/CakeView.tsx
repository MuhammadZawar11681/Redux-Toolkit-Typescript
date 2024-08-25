import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { ordered, restocked } from './cakeSlice'

export const CakeView = () => {
  const numOfCakes = useAppSelector(state => state.cake.numOfCakes)
  const dispatch = useAppDispatch()
  const [restockAmount, setRestockAmount] = useState(1)

  return (
    <div style={{ padding: '0px', textAlign: 'center' }}>
      <h2>Cakes Available: {numOfCakes}</h2>
      <button 
        onClick={() => dispatch(ordered())}
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
          onClick={() => dispatch(restocked(restockAmount))}
          className="App-button restock-button"
        >
          Restock Cakes
        </button>
      </div>
    </div>
  )
}
