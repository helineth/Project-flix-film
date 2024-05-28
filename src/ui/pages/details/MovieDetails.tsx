import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailsMovieType } from "../../../types/DetailsMovieType";

export default function MovieDetails() {
    const params = useParams()
    const {
        imdbID
    } = params;
    const apiKey = '8b95da48';
    const [movie, setMovie] = useState<DetailsMovieType>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const { data } = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}&r=json`);
                console.log(data, 'data');

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
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
                <div className="text-center">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
                    <h2 className="text-xl font-semibold">Loading...</h2>
                </div>
            </div>
        );
    }

    if (movie) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-500 text-white p-4">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                    <img
                        src={movie?.Poster}
                        alt={movie?.Title}
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
        );
    }
}