import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/home/Home';
import MovieList from './Components/movieList/MovieList';
import MovieDetails from './Pages/movieDetails/MovieDetails';

const App = () => {
  return (
    <div className='App'>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movie/:id' element={<MovieDetails/>} />
        <Route path='/movies/:type' element={<MovieList/>} />
        <Route path='/*' element={<h2>Error Page</h2>} />
      </Routes>
    </Router>      
    </div>
  )
}

export default App
