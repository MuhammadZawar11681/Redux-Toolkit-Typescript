import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  numOfIcecreams: number
}

const initialState: InitialState = {
  numOfIcecreams: 10
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: state => {
      state.numOfIcecreams--
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIcecreams += action.payload
    }
  }
  // Removed the extraReducers section to stop icecream reduction on cake order
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions
