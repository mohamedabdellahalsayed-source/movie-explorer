import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

function FavoritesPage({ favorites, toggleFavorite }) {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center gap-6 py-10 px-4">
      <Link
        to="/"
        className="self-start bg-gray-800/80 hover:bg-gray-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
      >
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-white">
        My Favorites ❤️
      </h1>

      {favorites.length === 0 ? (
        <p className="text-gray-400 text-lg">
          You haven't added any favorites yet.
        </p>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center max-w-6xl">
          {favorites.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={true}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default FavoritesPage