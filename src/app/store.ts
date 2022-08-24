import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from '../reducers/navbarSlice'

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
