import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

// Create Context
const AppContext = React.createContext();

// Provider Function
const AppProvider = ({ children }) => {
    // States
    const [tMovies, setTmovies] = useState([]);
    const [Pmovies, setPmovies] = useState([]);
    const [Umovies, setUmovies] = useState([]);
    const [Nmovies, setNmovies] = useState([]);
    const [Amovies, setAmovies] = useState([]);
    const [Rmovies, setRmovies] = useState([]);
    const [Loading, setLoading] = useState(false);
    
    // API Url
    const API_URL = "https://api.themoviedb.org/3/";
    // API Key
    const API_Key = "4c9331f7f1658b086caa33ea8f00c389";

    // Fetch Tranding Movies
    const Tranding_Movies = async () => {
        const Tres = await fetch(`${API_URL}trending/movie/week?api_key=${API_Key}`);
        const data = await Tres.json();
        setTmovies(data.results);
        setLoading(true)
    }

    // Fetch Popular Movies
    const Popular_Movie = async () => {
        const Pres = await axios.get(`${API_URL}discover/movie?sort_by=popularity.desc&api_key=${API_Key}&page=1`);
        //  console.log("Pdata",Pres.data.results);
        setPmovies(Pres.data.results)
        setLoading(true)
    }

    // Fetch Upcoming Movies
    const Upcoming_Movies = async () => {

        const Ures = await axios.get(`${API_URL}movie/upcoming?api_key=${API_Key}&page=1`);
        // console.log("Ures", Ures.data.results);
        setUmovies(Ures.data.results)
        setLoading(true)

    }

    // Fetch NowPlaying  Movies
    const NowPlaying_Movies = async () => {

        const Nres = await axios.get(`${API_URL}movie/now_playing?api_key=${API_Key}&page=1`);
        // console.log("Nres", Nres.data.results);
        setNmovies(Nres.data.results);
        setLoading(true)
    }

    // Fetch Adventure  Movies
    const Adventure_Movies = async () => {

        const Ares = await axios.get(`${API_URL}discover/movie?sort_by=popularity.desc&api_key=${API_Key}&page=3`);
        setAmovies(Ares.data.results);
        setLoading(true)
    }

    // Fetch TopRated Movies
    const TopRated_Movies = async () => {

        const Rres = await axios.get(`${API_URL}movie/top_rated?api_key=${API_Key}&page=1`);
        setRmovies(Rres.data.results);
        setLoading(true)
    }

    useEffect(() => {
        let Debouncing = setTimeout(() => {
            Tranding_Movies();
            Popular_Movie();
            Upcoming_Movies();
            NowPlaying_Movies();
            Adventure_Movies();
            TopRated_Movies();
        }, 2000);
        return () => clearTimeout(Debouncing)
    }, [])
    // return States
    return (
        <AppContext.Provider value={{ tMovies, Pmovies, Umovies, Nmovies, Amovies, Rmovies, Loading }}>
            {children}
        </AppContext.Provider>
    );
    // Provider Function End; 
};

// Create global context
const useGlobalContext = () => {
    return useContext(AppContext);
};


export { AppProvider, useGlobalContext };