import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import { fetchFilmsByName } from "../../api";
import MovieList from "../../components/MovieList/MovieList";

function MoviesPage() {
    const [foundMovies, setFoundMovies] = useState([]);
    const [loadingState, setLoadingState] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '';

    const validationSchema = Yup.object({
        searchInput: Yup.string().trim().required('Input field cannot be empty'),
    });

    useEffect(() => {
        if (!query.trim()) {
            return;
        }
        const getMovieDetails = async () => {
            try {
                setLoadingState(true);
                const data = await fetchFilmsByName(query);
                setFoundMovies(data.results || []);
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingState(false);
            }
        };

        getMovieDetails();
    }, [query]);

    const onSubmit = (values, actions) => {
        const searchInput = values.searchInput.trim();
        if (searchInput === '') {
            return;
        }
        setSearchParams({ query: searchInput });
        setFoundMovies([]);
        actions.resetForm();
    };

    const fieldProperties = {
        type: "text",
        name: "searchInput",
        autoComplete: "off",
        placeholder: "Search films....",
    };

    return (
        <>
            <Formik
                initialValues={{ searchInput: "" }}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                enableReinitialize
            >
                <Form>
                    <Field {...fieldProperties} />
                    <button type="submit">Search</button>
                </Form>
            </Formik>
            {loadingState && <p>Loading information...</p>}
            {!loadingState && query && foundMovies.length === 0 && <p>No movie details available</p>}
            <MovieList moviesData={foundMovies} />
        </>
    );
}

export default MoviesPage;