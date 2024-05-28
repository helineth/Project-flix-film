import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MovieType } from "../../../types/FilmType";
import axios from "axios";
import MovieCard from "../../components/MovieCard";

export default function Results() {
    const params = useParams();
    const { title } = params;
    const apiKey = '8b95da48';
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const { data } = await axios.get(`http://www.omdbapi.com/?s=${title}&apikey=${apiKey}&r=json`);
                if (data.Search) {
                    setMovies(data.Search);
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [title]);

    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-red-500">
            <header className="w-full p-4 flex justify-between items-center bg-gray-900 shadow-md">
                <h1 className="text-2xl text-white font-bold">Resultados da Pesquisa</h1>
                <button
                    onClick={() => navigate('/')}
                    className="px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700 transition duration-300"
                >
                    Voltar para Home
                </button>
            </header>
            {loading ? (

                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white w-full">
                    <div className="text-center">
                        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
                        <h2 className="text-xl font-semibold">Carregando...</h2>
                    </div>
                </div>

            ) : (
                <main className="w-full px-2 mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {movies.length > 0 ? (
                            movies.map(movie => (
                                <MovieCard key={movie.imdbID} movie={movie} />
                            ))
                        ) : (
                            <p className="text-xl text-gray-200 col-span-full text-center">
                                Nenhum filme correspondente à pesquisa.
                            </p>
                        )}
                    </div>
                </main>
            )}

        </div>
    );
}
