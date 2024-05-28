import { MovieType } from "../../types/FilmType"

interface MovieCardProps {
  movie: MovieType
}
export default function MovieCard(props: MovieCardProps) {
  const { movie } = props
  return (

    /*   <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
    <Link href={`/movie/${movie.imdbID}`}>
      <Image
        src={movie}
        width={500}
        height={300}
        className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
      ></Image>
      <div className='p-2'>
        
        <h2 className='text-lg font-bold truncate'>
          {movie.Title}
        </h2>
        <p className='flex items-center'>
          {movie.Year}
          <FiThumbsUp className='h-5 mr-1 ml-3' />
          {movie.Type}
        </p>
      </div>
    </Link>
  </div> */
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{movie.Title}</h2>
        <p className="text-sm text-gray-400">{movie.Year}</p>
      </div>
    </div>
  );

}