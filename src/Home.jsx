import { useState } from "react";
import movieListData from "./data/movieListData.json";
import MovieCard from "./components/MovieCard";

function Home() {
  const [movies] = useState(movieListData.results);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black/70 to-transparent  text-slate-50">
      <header className="px-6 pt-6 pb-4">
        <h1 className="text-2xl font-bold ">인기 영화</h1>
        <p className="mt-1 text-sm text-slate-400">더미 메인 페이지</p>
      </header>

      {/* MovieCard 그리드 */}
      <main className="px-6 pb-10">
        <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              rating={movie.vote_average}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Home;
