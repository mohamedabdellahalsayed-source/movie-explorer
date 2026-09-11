import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MovieDetails from './pages/MovieDetails'
import FavoritesPage from './pages/FavoritesPage'

function App(){
  const [favorites, setFavorites] = useState(() => {
  const saved = localStorage.getItem('favorites')
  return saved ? JSON.parse(saved) : []
})

useEffect(() => {
  localStorage.setItem('favorites', JSON.stringify(favorites))
}, [favorites])
function toggleFavorite(movie) {
  const isAlreadyFavorite = favorites.some(fav => fav.id === movie.id)

  if (isAlreadyFavorite) {
    setFavorites(favorites.filter(fav => fav.id !== movie.id))
  } else {
    setFavorites([...favorites, movie])
  }
}
  return(
    <Routes>
      <Route path="/" element={<HomePage favorites={favorites} toggleFavorite={toggleFavorite} />} />
      <Route path="/movie/:id" element={<MovieDetails favorites={favorites} toggleFavorite={toggleFavorite} />} />
      <Route path="/favorites" element={<FavoritesPage favorites={favorites} toggleFavorite={toggleFavorite} />} />
    </Routes>
  )
}

export default App