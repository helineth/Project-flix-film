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
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{movie.Title}</h2>
        <p className="text-sm text-gray-400">{movie.Year}</p>
      </div>
    </div>
  );

}