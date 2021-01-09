import React, { useEffect, useState } from "react";
import axios from "../../config/axios";
import { requests } from "../../config/requests";
import {
  Header,
  BannerContents,
  Title,
  Button,
  Description,
  FadeBottom,
} from "./styles/banner";

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const movies = request.data.results;
      const moviesLength = request.data.results.length - 1;

      setMovie(movies[Math.floor(Math.random() * moviesLength)]);
      return request;
    }
    fetchData();
  }, []);

  const backdropPath = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;
  const truncateDescription = (str, totalLetters) => {
    return str?.length > totalLetters
      ? str.substr(0, totalLetters - 1) + "..."
      : str;
  };

  return (
    <Header backdropPath={backdropPath}>
      <BannerContents>
        <Title>{movie?.name || movie?.original_name}</Title>
        <Button>Play</Button>
        <Button>My List</Button>
        <Description>{truncateDescription(movie?.overview, 150)}</Description>
      </BannerContents>
      <FadeBottom />
    </Header>
  );
}
