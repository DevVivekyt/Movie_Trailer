import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Upcoming from './Pages/Movies/UpComingMovie';
import NowPlaying from './Pages/Movies/NowPlayingMovie';
import Popular from './Pages/Movies/PopularMovie';
import Trending from './Pages/Movies/TrandingMovie';
import Adventure from './Pages/Movies/AdventureMovie'
import TopRated from './Pages/Movies/TopRatedMovie';
import MovieDetails from './Pages/Movies/MovieDetails';
import { SkeletonTheme } from 'react-loading-skeleton'


const App = () => {
  return (
    <>
      <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Upcoming' element={<Upcoming />} />
            <Route path='/NowPlaying' element={<NowPlaying />} />
            <Route path='/Popular' element={<Popular />} />
            <Route path='/Trending' element={<Trending />} />
            <Route path='/Adventure' element={<Adventure />} />
            <Route path='/TopRated' element={<TopRated />} />
            <Route path='/movie/:id' element={<MovieDetails />} />
            <Route path='/Upcoming/movie/:id' element={<MovieDetails />} />
            <Route path='/NowPlaying/movie/:id' element={<MovieDetails />} />
            <Route path='/Popular/movie/:id' element={<MovieDetails />} />
            <Route path='/Trending/movie/:id' element={<MovieDetails />} />
            <Route path='/Adventure/movie/:id' element={<MovieDetails />} />
            <Route path='/TopRated/movie/:id' element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </SkeletonTheme>
    </>
  )
}

export default App