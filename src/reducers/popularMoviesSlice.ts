import appAxios from '../app/api'
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
  () => {
    return appAxios
      .get('/movie/now_playing', {
        params: {
          page: 1,
        },
      })
      .then((res) => res.data)
  }
)

const popularSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopStreaming.pending, (state) => {
      state.loading = true
    })
    builder.addCase(
      fetchPopStreaming.fulfilled,
      (state, action: PayloadAction<tmdbDataType>) => {
        state.loading = false
        state.data = action.payload
        state.error = ''
      }
    )
    builder.addCase(fetchPopStreaming.rejected, (state, action) => {
      state.loading = false
      state.data = {}
      state.error = action.error.message || 'Something went wrong'
    })
  },
})

export default popularSlice.reducer
