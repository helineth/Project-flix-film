import { MovieType } from "../../types/FilmType"
import { useNavigate } from 'react-router-dom';
interface MovieCardProps {
  movie: MovieType
}
export default function MovieCard(props: MovieCardProps) {
  const { movie } = props
  const navigation = useNavigate()
  const handleSubmit = () => {
    const imdbID = movie.imdbID
    navigation(`/movie/${imdbID}`)
  };
  return (
    <div onClick={handleSubmit} className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
      <div className="relative w-full md:w-full  h-56 sm:h-64">
        {movie.Poster === "N/A" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 6a1 1 0 012 0v5a1 1 0 01-2 0V6zm1 7a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
        {movie.Poster !== "N/A" && (
          <img src={movie.Poster} alt={movie.Title} className="absolute inset-0 w-full h-full object-cover" />
        )}
      </div>
      <div className="p-4 flex flex-col">
        <h2 className="text-lg font-bold">{movie.Title}</h2>
        <p className="text-sm text-gray-400">{movie.Year}</p>
      </div>
    </div>

  );

}