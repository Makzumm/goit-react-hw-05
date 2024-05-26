function MovieCard({ movieData: { backdrop_path, title, overview, release_date, vote_average, genres } }) {
    const backdropUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;
    return (
        <div>
            <img src={backdropUrl} alt="Film Preview" width='500' height='auto' />
            <p>Title: {title}</p>
            <p>Overview: {overview}</p>
            <p>Release date: {release_date}</p>
            <p>Vote average: {vote_average}</p>
            <ul>
                {genres.map((genre) =>
                    <li key={genre.id}>
                        {genre.name}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default MovieCard;