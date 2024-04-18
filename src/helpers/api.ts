import axios from 'axios'
import API_KEY from '@/env'

const appAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-type': 'application/json',
  },
  params: {
    api_key: API_KEY,
    watch_region: 'US',
    language: 'en-US',
  },
})

export default appAxios
