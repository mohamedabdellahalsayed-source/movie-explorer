import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import MovieCard  from './components/MovieCard'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([])
  useEffect(() => {
  fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setMovies(data.results)
    })
}, [])
useEffect(()=>{
  const timer = setTimeout(()=>{
    if(searchTerm){
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
    } else {
  fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    .then(response => response.json())
    .then(data => setMovies(data.results))
}
  }, 500)
  return () => clearTimeout(timer)
},[searchTerm])
return (
  <div className="min-h-screen bg-gray-900 flex flex-col items-center gap-6 py-10">
    <h1 className="text-4xl font-bold text-white">
      Movie Explorer 🎬
    </h1>
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <div className="flex flex-wrap gap-4 justify-center max-w-6xl">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
)
}

export default App