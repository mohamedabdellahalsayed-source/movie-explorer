import { Link } from 'react-router-dom'

function MovieCard({ movie, isFavorite, toggleFavorite }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden w-48 relative">
      <button
        onClick={(e) => {
          e.preventDefault()
          toggleFavorite(movie)
        }}
        className="absolute top-2 right-2 z-10 text-2xl"
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
      <Link to={`/movie/${movie.id}`} className="block">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-72 object-cover"
        />
        <div className="p-3">
          <h3 className="text-white text-sm font-semibold truncate">
            {movie.title}
          </h3>
          <p className="text-gray-400 text-xs mt-1">
            ⭐ {movie.vote_average.toFixed(1)}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard