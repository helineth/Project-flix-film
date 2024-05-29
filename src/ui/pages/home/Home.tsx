import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";
import { MovieType } from "../../../types/MovieType";
import axios from "axios";
import Header from "../../components/Header";
import Loading from "../../components/Loading";

export default function Home() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);

 
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(`http://www.omdbapi.com/?s=fast&apikey=${apiKey}&r=json`);
        if (data.Search) {
          setMovies(data.Search);
        }
      } catch (error) {
        console.error("Erro ao fazer requisição:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);


  return (
    <main className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-red-500">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />

      {loading ? (
        <Loading />
      ) : (
        <section className="w-full px-2 mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map(movie => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
