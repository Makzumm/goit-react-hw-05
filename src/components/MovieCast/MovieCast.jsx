import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { fetchFilmCast } from '../../api';

function MovieCast() {
    const { movieId } = useParams();
    const [credits, setCredist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCredist = async () => {
            try {
                setLoading(true);
                const data = await fetchFilmCast(movieId);
                setCredist(data.cast);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        };

        getCredist();
    }, [movieId]);

    if (loading) return <p>Loading credits...</p>;
    if (error) return <p>Error: {error}</p>;
    if (credits.length === 0) return <p>No credits available</p>;

    return (
        <div>
            <ul>
                {credits.map((credit) => (
                    <li key={credit.id}>Real name: {credit.name}, Acting: {credit.character}</li>
                ))}
            </ul>
        </div>
    );
}

export default MovieCast;