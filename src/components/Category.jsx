import React from 'react'
import { NavLink } from 'react-router-dom';
import './Com.css'

const Category = () => {
    return (
        <>
            <div className="container">
                <div className='Movie_Heading'>
                    <hr />
                    <h1>Choose Your Favourite Movies</h1>
                    <hr />
                </div>
                <div className='row justify-content-center align-items-center'>
                    <div className="col-md-2 col-5 mb-2">
                        <NavLink to="/Upcoming">
                            <button>Upcoming</button>
                        </NavLink>
                    </div>
                    <div className="col-md-2 col-5 mb-2">
                        <NavLink to="/NowPlaying">
                            <button>Now Playing</button>
                        </NavLink>
                    </div>
                    <div className="col-md-2 col-5 mb-2">
                        <NavLink to="/Popular">
                            <button>Popular</button>
                        </NavLink>
                    </div>
                    <div className="col-md-2 col-5 mb-2">
                        <NavLink to="/Trending">
                            <button>Trending</button>
                        </NavLink>
                    </div>
                    <div className="col-md-2 col-5 mb-2">
                        <NavLink to="/Adventure">
                            <button>Adventure</button>
                        </NavLink>
                    </div>
                    <div className="col-md-2 col-5">
                        <NavLink to="/TopRated">
                            <button>TopRated</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category