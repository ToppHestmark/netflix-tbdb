import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";
import { Container, Title, Posters, Poster } from './styles/row';

const posters_base_url =  "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchURL, isLargerRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(fetchURL);
                setMovies(request.data.results);
                return request;
            }
            catch(err) {
                console.log(err.message);
            }
        }
        fetchData()
    }, [fetchURL]);

    // ----- react-youtube properties -----
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          // http://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
      };

    const getTrailer = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer( movie?.title || "" )
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"))
            })
            .catch(err => console.log(err.message))
        }
        return trailerUrl;
    };
    
    return (
        <Container>
            <Title> {title} </Title>
            <Posters>
                {movies.map(movie => (
                    <Poster 
                        isLargerRow={isLargerRow}
                        key={movie.id}
                        src={`${posters_base_url}${isLargerRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.title}
                        onClick={() => getTrailer(movie)}
                    />
                ))}
            </Posters>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </Container>
    )
}
