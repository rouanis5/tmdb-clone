import 'server-only'
import appAxios from '@/helpers/api'
import { tmdbDataType } from '@/types/tmdb.type'

abstract class IMoviesService {
  async fetchByTag(tag?: string): Promise<tmdbDataType> {
    switch (tag) {
      case 'rent':
        return await this.fetchPopForRent()
      case 'theater':
        return await this.fetchPopInTheater()
      case 'pop':
      default:
        return await this.fetchPopStreaming()
    }
  }

  abstract fetchPopStreaming(): Promise<tmdbDataType>
  abstract fetchPopForRent(): Promise<tmdbDataType>
  abstract fetchPopInTheater(): Promise<tmdbDataType>
}

class MovieService extends IMoviesService {
  async fetchPopStreaming(): Promise<tmdbDataType> {
    const res = await appAxios.get('discover/movie', {
      params: {
        sort_by: 'popularity.desc',
        with_watch_monetization_types: 'flatrate',
        page: 1,
      },
    })
    return res.data
  }

  async fetchPopForRent(): Promise<tmdbDataType> {
    const res = await appAxios.get('/discover/movie', {
      params: {
        sort_by: 'popularity.desc',
        with_release_type: '3|2',
        page: 1,
      },
    })
    return res.data
  }

  async fetchPopInTheater(): Promise<tmdbDataType> {
    const res = await appAxios.get('/discover/movie', {
      params: {
        with_watch_monetization_types: 'ads|buy',
        page: 1,
      },
    })
    return res.data
  }
}

const movieService = new MovieService()
export default movieService
