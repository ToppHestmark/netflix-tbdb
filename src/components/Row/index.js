import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import { Container, Title, Posters, Poster } from './styles/row';

const posters_base_url =  "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchURL, isLargerRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(fetchURL);
                setMovies(request.data.results);
                return request;
            }
            catch(err) {
                console.log(err);
            }
        }
        fetchData()
    }, [fetchURL]);

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
                    />
                ))}
            </Posters>
        </Container>
    )
}
