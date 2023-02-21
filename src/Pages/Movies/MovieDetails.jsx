import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Pages.css';
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
import { Skeleton } from '@mui/material';

const MovieDetails = () => {
    const [Details, setDetails] = useState([]);
    const [Video, setVideo] = useState([]);
    const iframeRef = useRef(null);
    const { id } = useParams();
    // API Url
    const API_URL = "https://api.themoviedb.org/3/";
    // API Key
    const API_Key = "4c9331f7f1658b086caa33ea8f00c389";
    // Img Url
    const Img_Url = "https://image.tmdb.org/t/p/original";

    const Movie_Destails = async () => {
        const Dres = await axios.get(`${API_URL}movie/${id}?api_key=${API_Key}&append_to_response=videos`);
        setDetails(Dres.data);
        setVideo(Dres.data.videos.results[0])
    }
    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height)
        let Debouncing = setTimeout(() => {
            Movie_Destails()
        }, 2000);
        return () => clearTimeout(Debouncing)
    }, [])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <img src={`${Img_Url}${Details.backdrop_path}` || <Skeleton />} alt="" className='img-fluid' />
                        <div className="row justify-content-between align-items-center detail-card">
                            <div className='col-md-4 col-10 mb-5'>
                                <img src={`${Img_Url}${Details.poster_path}` || <Skeleton />} className="card-img-top" alt="..." />
                            </div>
                            <div className='col-md-8 col-12 detail-card-text'>
                                <h2>{Details.title || <Skeleton />}</h2>
                                <p>{Details.overview || <Skeleton />}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <iframe
                            src={`https://www.youtube.com/embed/${Video.key}`}
                            ref={iframeRef}
                            title={Video.title}
                            width='100%'>
                        </iframe>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MovieDetails