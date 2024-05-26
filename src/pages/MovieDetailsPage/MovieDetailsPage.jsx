import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Outlet, NavLink, useLocation } from "react-router-dom";
import { fetchFilmById } from '../../api';
import MovieCard from '../../components/MovieCard/MovieCard';

function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loadingState, setLoadingState] = useState(false);
    const location = useLocation();
    const backLinkHref = useRef(location.state?.from || "/movies");

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                setLoadingState(true);
                const data = await fetchFilmById(movieId);
                setMovie(data);
            } catch (error) {
                console.log(error)
            } finally {
                setLoadingState(false);
            }
        };

        getMovieDetails();
    }, [movieId]);

    if (loadingState) return <p>Loading information...</p>;
    if (!movie) return <p>No movie details available</p>;

    return (
        <>
            <NavLink to={backLinkHref.current}>Go back</NavLink>
            <MovieCard movieData={movie} />
            <ul>
                <li><NavLink to="cast">Cast</NavLink></li>
                <li><NavLink to="reviews">Reviews</NavLink></li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
}

export default MovieDetailsPage;