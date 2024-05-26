import { NavLink, useLocation } from "react-router-dom";

function MovieList({ moviesData }) {
    const location = useLocation()
    return (
        <ul>
            {moviesData.map((movie) => {
                return (
                    <li key={movie.id}>
                        <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>{movie.original_title}</NavLink>
                    </li>
                )
            })}
        </ul >
    )
}

export default MovieList;