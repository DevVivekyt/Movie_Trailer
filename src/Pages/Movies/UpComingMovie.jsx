import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import Category from '../../components/Category';
import Footer from '../../components/Footer';
import { useGlobalContext } from '../../Context/Contex';
import '../Pages.css';


const UpComingMovie = () => {
    const { Umovies, } = useGlobalContext();


    const Img_Url = "https://image.tmdb.org/t/p/original";

    return (
        <>
            <Header />
            <Slider />
            <Category />
            <div className="container">
                <div className='row'>
                    {Umovies.map((item, index) => {
                        const movieName = item.title.substring(0, 10);
                        const overview = item.overview.substring(0, 90);
                        return (
                            <div className='col-md-3 col-12 mt-5' key={index}>
                                <NavLink to={`movie/${item.id}`}>
                                    <div className="mb-5 movie-card"  >
                                        <img src={`${Img_Url}${item.poster_path}`} className="img-fluid rounded-start" alt="..." />
                                        <div className="movie-card-text">
                                            <h5>
                                                {movieName.length >= 10 ? `${movieName}...` : movieName}
                                            </h5> <br />
                                            <p>
                                                {overview.length >= 90 ? `${overview}...` : overview}
                                            </p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UpComingMovie