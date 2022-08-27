import { NavDataType } from '../types/moviesNav.type'
import { createSlice } from '@reduxjs/toolkit'

import {
  fetchPopStreaming,
  fetchPopForRent,
  fetchPopInTheater,
} from './popularMoviesSlice'

const initialState: NavDataType[] = [
  {
    id: 1,
    name: 'streaming',
    dispatcher: fetchPopStreaming(),
  },
  // { id: 2, name: 'On TV', dispatcher: fetchPopOnTv() },
  {
    id: 3,
    name: 'For Rent',
    dispatcher: fetchPopForRent(),
  },
  {
    id: 4,
    name: 'In Theaters',
    dispatcher: fetchPopInTheater(),
  },
]

const moviesNavSlice = createSlice({
  name: 'moviesNav',
  initialState,
  reducers: {},
})

export default moviesNavSlice.reducer
