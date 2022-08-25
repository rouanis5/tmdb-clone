import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from '../reducers/navbarSlice'
import popularMoviesReducer from '../reducers/popularMoviesSlice'

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    popular: popularMoviesReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
