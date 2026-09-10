import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function MovieDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

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
    <div className="min-h-screen bg-gray-900 flex flex-col items-center gap-4 py-10 px-4">
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