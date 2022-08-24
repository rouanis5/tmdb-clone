import { LinkPropsType } from '../types/links.type'
import { createSlice } from '@reduxjs/toolkit'

const initialState: LinkPropsType[] = [
  {
    name: 'movies',
    url: '#',
    subLinks: [
      {
        name: 'popular',
        url: '#',
      },
      {
        name: 'now playing',
        url: '#',
      },
      {
        name: 'upcoming',
        url: '#',
      },
      {
        name: 'top rated',
        url: '#',
      },
    ],
  },
  {
    name: 'TV shows',
    url: '#',
    subLinks: [
      {
        name: 'popular',
        url: '#',
      },
      {
        name: 'airing today',
        url: '#',
      },
      {
        name: 'on TV',
        url: '#',
      },
      {
        name: 'top rated',
        url: '#',
      },
    ],
  },
]

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {},
})

export default navbarSlice.reducer
