import { useState, useEffect } from 'react';
import { fetchTrendFilms } from '../../api';
import MovieList from '../../components/MovieList/MovieList';

function HomePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchTrendFilms().then(data => setData(data))
    }, [])

    return (
        <>
            <MovieList moviesData={data} />
        </>
    )
}

export default HomePage;