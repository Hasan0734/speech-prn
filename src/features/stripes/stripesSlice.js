import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
}

const characterSlice = createSlice({
  name: 'strips',
  initialState,
  reducers: {
    makeSearch: (state, action) => {
      state.search = action.payload
    },
  },
})

export const { makeSearch } = characterSlice.actions
export default characterSlice.reducer
