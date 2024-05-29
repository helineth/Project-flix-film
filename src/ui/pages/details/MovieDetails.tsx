import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DetailsMovieType } from "../../../types/DetailsMovieType";
import Loading from "../../components/Loading";

export default function MovieDetails() {
    const params = useParams()
    const {
        imdbID
    } = params;
    const apiKey = import.meta.env.VITE_API_KEY;
    const [movie, setMovie] = useState<DetailsMovieType>();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const { data } = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}&r=json`);


                if (data) {
                    setMovie(data);
                }

            } catch (error) {
                console.error("Erro ao fazer requisição:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, [imdbID]);

    if (loading) {
        <Loading />
    }

    if (movie) {
        return (
            <section>
                <header className="w-full p-4 flex justify-between items-center bg-gray-900 shadow-md">
                    <button
                        onClick={() => navigate('/')}
                        className="px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700 transition duration-300"
                    >
                        Página inicial
                    </button>
                </header>
                <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-500 text-white p-4">

                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                        <img
                            src={movie?.Poster}
                            alt={`Poster do filme ${movie?.Title}}`}
                            className="w-full md:w-1/3 rounded-lg shadow-lg"
                        />
                        <div className="flex flex-col space-y-4">
                            <h1 className="text-4xl font-bold">{movie?.Title}</h1>
                            <div>
                                <p><strong>Ano:</strong> {movie?.Year}</p>
                                <p><strong>Gênero:</strong> {movie?.Genre}</p>
                                <p><strong>Director:</strong> {movie?.Director}</p>
                                <p><strong>Actores:</strong> {movie?.Actors}</p>
                                <p><strong>Descrição:</strong> {movie?.Plot}</p>
                                <p><strong>Linguagem:</strong> {movie?.Language}</p>
                                <p><strong>País:</strong> {movie?.Country}</p>
                                <p><strong>Prêmios:</strong> {movie?.Awards}</p>
                            </div>
                            <div className="flex space-x-4">
                                {movie?.Ratings.map((rating, index) => (
                                    <div key={index} className="bg-gray-800 p-2 rounded-lg shadow-lg">
                                        <p className="font-bold">{rating.Source}</p>
                                        <p>{rating.Value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}