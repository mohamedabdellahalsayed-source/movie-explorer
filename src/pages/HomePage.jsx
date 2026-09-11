import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import MovieCard  from '../components/MovieCard'

function HomePage({ favorites, toggleFavorite }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
  fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setMovies(data.results)
    })
}, [])
useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(true)

    if (searchTerm) {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
        .then(response => response.json())
        .then(data => {
          setMovies(data.results)
          setIsLoading(false)
        })
    } else {
      fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
        .then(response => response.json())
        .then(data => {
          setMovies(data.results)
          setIsLoading(false)
        })
    }
  }, 500)

  return () => clearTimeout(timer)
}, [searchTerm])
return (
  <div className="min-h-screen bg-gray-900 flex flex-col items-center gap-6 py-10">
    <h1 className="text-4xl font-bold text-white">
      Movie Explorer 🎬
    </h1>
    <Link
  to="/favorites"
  className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full transition-colors"
>
  ❤️ My Favorites
</Link>
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
{isLoading ? (
  <p className="text-white text-lg">Loading...</p>
) : (
  <div className="flex flex-wrap gap-4 justify-center max-w-6xl">
    {movies.map(movie => (
      <MovieCard
  key={movie.id}
  movie={movie}
  isFavorite={favorites.some(fav => fav.id === movie.id)}
  toggleFavorite={toggleFavorite}
/>
    ))}
  </div>
)}
  </div>
)
}

export default HomePage