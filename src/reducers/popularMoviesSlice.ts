import appAxios from '../helpers/api'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { tmdbDataType } from '../types/tmdb.type'

type InitialState = {
  loading: boolean
  data: tmdbDataType
  error: string
}
const initialState: InitialState = {
  loading: false,
  data: {},
  error: '',
}

// Generates pending, fulfilled and rejected action types
export const fetchPopStreaming = createAsyncThunk(
  'popular/fetchPopStreaming',
  async () => {
    const res = await appAxios.get('discover/movie', {
      params: {
        sort_by: 'popularity.desc',
        with_watch_monetization_types: 'flatrate',
        page: 1,
      },
    })
    return res.data
  }
)

export const fetchPopForRent = createAsyncThunk(
  'popular/fetchPopForRent',
  async () => {
    const res = await appAxios.get('/discover/movie', {
      params: {
        sort_by: 'popularity.desc',
        with_release_type: '3|2',
        page: 1,
      },
    })
    return res.data
  }
)

export const fetchPopInTheater = createAsyncThunk(
  'popular/fetchPopInTheater',
  async () => {
    const res = await appAxios.get('/discover/movie', {
      params: {
        with_watch_monetization_types: 'ads|buy',
        page: 1,
      },
    })
    return res.data
  }
)

const popularSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    ;[fetchPopStreaming, fetchPopForRent, fetchPopInTheater].forEach(
      (dispatcher) => {
        builder.addCase(dispatcher.pending, (state) => {
          state.loading = true
        })
        builder.addCase(
          dispatcher.fulfilled,
          (state, action: PayloadAction<tmdbDataType>) => {
            state.loading = false
            state.data = action.payload
            state.error = ''
          }
        )
        builder.addCase(dispatcher.rejected, (state, action) => {
          state.loading = false
          state.data = {}
          state.error = action.error.message || 'Something went wrong'
        })
      }
    )
  },
})

export default popularSlice.reducer
