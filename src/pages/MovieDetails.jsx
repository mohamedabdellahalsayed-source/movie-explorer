import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function MovieDetails({ favorites, toggleFavorite }) {
const { id } = useParams()
const [movie, setMovie] = useState(null)
const isFavorite = movie && favorites.some(fav => fav.id === movie.id)

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    .then(response => response.json())
    .then(data => setMovie(data))
}, [id])

if (!movie) {
    return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-white text-lg">Loading...</p>
    </div>
    )
}

return (
    <div
    className="min-h-screen flex flex-col items-center gap-4 py-10 px-4 bg-cover bg-center"
    style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
    }}>
<Link
  to="/"
  className="self-start bg-gray-800/80 hover:bg-gray-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
>
  ← Back to Home
</Link>
<button
  onClick={() => toggleFavorite(movie)}
  className="text-3xl"
>
  {isFavorite ? '❤️' : '🤍'}
</button>
    <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-64 rounded-lg"
    />
    <h1 className="text-white text-3xl font-bold text-center">
        {movie.title}
    </h1>
    <p className="text-gray-400 max-w-2xl text-center">
        {movie.overview}
    </p>
    <p className="text-yellow-400">
        ⭐ {movie.vote_average.toFixed(1)}
    </p>
    </div>
)
}

export default MovieDetails