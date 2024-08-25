import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { ordered, restocked } from './icecreamSlice'

export const IcecreamView = () => {
  const [value, setValue] = React.useState(1)
  const numOfIcecreams = useAppSelector(state => state.icecream.numOfIcecreams)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h2>Ice Creams Available: {numOfIcecreams}</h2>
      <button 
        onClick={() => dispatch(ordered())}
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
          Restock Ice Creams
        </button>
      </div>
    </div>
  )
}
