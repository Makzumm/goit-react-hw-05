import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { fetchFilmReviews } from '../../api';

function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getReviews = async () => {
            try {
                setLoading(true);
                const data = await fetchFilmReviews(movieId);
                setReviews(data.results);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        };

        getReviews();
    }, [movieId]);

    if (loading) return <p>Loading reviews...</p>;
    if (error) return <p>Error: {error}</p>;

    if (reviews.length === 0) return <p>No reviews available</p>;

    return (
        <div>
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>{review.content}</li>
                ))}
            </ul>
        </div>
    );
}

export default MovieReviews;