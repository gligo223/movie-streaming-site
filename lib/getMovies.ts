import { SearchResults, Movie } from "../type";

const fetcher = async (url: URL, cacheTime?: number) => {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_KEY}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as SearchResults;

  return data.results;
};

const API_KEY = process.env.TMBD_API_KEY;

export async function getNowPlayingMovies(): Promise<Movie[]> {
  const url = new URL("https://api.themoviedb.org/3/movie/now_playing");
  return fetcher(url);
}

export async function getUpcomingMovies(): Promise<Movie[]> {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
  return fetcher(url);
}

export async function getTopRatedMovies(): Promise<Movie[]> {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
  return fetcher(url);
}

export async function getPopularMovies(): Promise<Movie[]> {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  return fetcher(url);
}

export async function getDiscoverMovies(genre: string): Promise<Movie[]> {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");
  url.searchParams.set("with_genres", genre);
  return fetcher(url);
}

export async function getSearchedMovies(term: string): Promise<Movie[]> {
  const url = new URL("https://api.themoviedb.org/3/search/movie");
  url.searchParams.set("query", term);
  return fetcher(url);
}

export async function getMovieVideos(id: string): Promise<any[]> {
  const url = new URL(`https://api.themoviedb.org/3/movie/${id}/videos`);
  return fetcher(url);
}

export async function getMovieDetails(id: string): Promise<Movie> {
  const url = new URL(`https://api.themoviedb.org/3/movie/${id}`);

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as Movie;

  return data;
}