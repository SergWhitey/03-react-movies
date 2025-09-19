import axios from 'axios';
import { Movie } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const token = import.meta.env.VITE_TMDB_TOKEN;

if (!token) {
  throw new Error('VITE_TMDB_TOKEN is not defined in environment variables.');
}

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

interface FetchMoviesResponse {
  results: Movie[];
}

export async function fetchMovies(query: string): Promise<Movie[]> {
  const response = await axiosInstance.get<FetchMoviesResponse>('/search/movie', {
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
  });
  return response.data.results;
}

export function getImageUrl(path: string | null, size: 'w500' | 'original' = 'w500'): string {
  return path ? `${IMAGE_BASE_URL}/${size}${path}` : '';
}
