import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieType } from "../../../types/FilmType";
import axios from "axios";
import MovieCard from "../../components/MovieCard";

export default function Results() {
    const params = useParams()
    const {
        title
    } = params;
    const apiKey = '8b95da48';
    const [movies, setMovies] = useState<MovieType[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await axios.get(`http://www.omdbapi.com/?s=${title}&apikey=${apiKey}&r=json`);
            if (data.Search) {
                setMovies(data.Search);
            }
        };

        fetchMovies();
    }, []);
    return (

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {
                movies.length > 0 ?
                    movies.map(movie => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))
                    :
                    <p className="text-sm text-gray-600">Nenhum filme correspondente à pesquisa.</p>
            }
        </div>
    )
}