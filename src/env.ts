const API_KEY = process.env.PRIVATE_TMDB_API_KEY

if (!API_KEY) {
  throw new Error('tmdb api key not found')
}

export default API_KEY
