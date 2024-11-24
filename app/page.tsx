import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";
import HeroCarousel from "@/components/ui/HeroCarousel";
import MovieContainer from "@/components/MovieContainer";

export default async function HomePage() {
  let nowPlayingMovies = await getNowPlayingMovies();
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  try {
    nowPlayingMovies = await getNowPlayingMovies();
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching now playing movies:', error.message);
      console.error('Error details:', error);
    } else {
      console.error('Unknown error fetching now playing movies:', error);
    }
  }

  return (
    <main>
      <HeroCarousel movies={nowPlayingMovies} />
      <div className="flex flex-col space-y-2">
        <MovieContainer movies={nowPlayingMovies} title="Now Playing" 
         />
        <MovieContainer movies={upcomingMovies} title="Upcoming Movies" />
        <MovieContainer movies={topRatedMovies} title="Top Rated Movies" />
        <MovieContainer movies={popularMovies} title="Popular Movies" />
        </div>
    </main>
  );
}