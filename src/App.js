import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import { requests } from './utils/requests';

export default function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Row 
        title="NETFIX ORIGINALS" 
        fetchURL={requests.fetchNetflixOriginals}
        isLargerRow={true} />
     <Row 
        title="Trending Now" 
        fetchURL={requests.fetchTrending} />
      <Row 
        title="Top rated" 
        fetchURL={requests.fetchTopRated} />
      <Row 
        title="Action Movies" 
        fetchURL={requests.fetchActionMovies} />
      <Row 
        title="Comedy Movies" 
        fetchURL={requests.fetchComedyMovies} />
      <Row 
        title="Horror Movies" 
        fetchURL={requests.fetchHorrorMovies} />
      <Row 
        title="Romance Movies" 
        fetchURL={requests.fetchRomanceMovies} />
      <Row 
        title="Documentaries" 
        fetchURL={requests.fetchDocumentaries} />
    </>
  );
};