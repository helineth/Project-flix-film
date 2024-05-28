import { MovieType } from "../../types/FilmType"

interface MovieCardProps {
    movie: MovieType
}
export default function MovieCard(props: MovieCardProps) {
    const { movie } = props
    return (
        <div className="relative bg-white rounded-lg shadow-lg p-4 cursor-pointer transition duration-300 ease-in-out  transform hover:shadow-xl hover:z-10">
            <img className="w-full h-auto rounded-t-lg" src={movie.Poster} alt="Movie image" />
            <div className="p-4">
                <p className="text-lg font-medium text-gray-900">{movie.Title}</p>
                <p className="text-sm text-gray-600">{movie.Type}</p>
                <p className="text-sm text-gray-600">{movie.Year}</p>
            </div>
        </div>
    );

}