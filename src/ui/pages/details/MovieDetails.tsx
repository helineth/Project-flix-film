import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieType } from "../../../types/FilmType";

export default function MovieDetails(){
    const params = useParams()
    const {
        imdbID
    } = params;
    const apiKey = '8b95da48';
    const [movie, setMovie] = useState<MovieType>();

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}&r=json`);
            console.log(data, 'data');
            
            if (data.Search) {
                setMovie(data.Search);
            }
        };

        fetchMovies();
    }, []);
    return(
        <div>{movie?.Title}</div>
    )
}