import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendFilms = async () => {
    const response = await axios.get('/trending/movie/day', {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWI0NzEzN2NhNjkwNmM3ZjE2NjQ0NTc0ZDFjM2JlNSIsInN1YiI6IjY2NTA4MTQ3ZGRjYzlhM2RlZmRkOGI3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wPJftTOwxE6bEAltu2kNhnUORZ5XKlpm4BeYnU2Z-40'
        },
        params: {
            include_adult: false,
            language: 'en-US',
        }
    });

    return response.data.results;
};

export const fetchFilmById = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}`, {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWI0NzEzN2NhNjkwNmM3ZjE2NjQ0NTc0ZDFjM2JlNSIsInN1YiI6IjY2NTA4MTQ3ZGRjYzlhM2RlZmRkOGI3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wPJftTOwxE6bEAltu2kNhnUORZ5XKlpm4BeYnU2Z-40`
        },
        params: {
            include_adult: false,
            language: 'en-US',
        }
    });
    return response.data;
};

export const fetchFilmReviews = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews`, {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWI0NzEzN2NhNjkwNmM3ZjE2NjQ0NTc0ZDFjM2JlNSIsInN1YiI6IjY2NTA4MTQ3ZGRjYzlhM2RlZmRkOGI3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wPJftTOwxE6bEAltu2kNhnUORZ5XKlpm4BeYnU2Z-40`
        },
    });
    return response.data;
};

export const fetchFilmCast = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits`, {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWI0NzEzN2NhNjkwNmM3ZjE2NjQ0NTc0ZDFjM2JlNSIsInN1YiI6IjY2NTA4MTQ3ZGRjYzlhM2RlZmRkOGI3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wPJftTOwxE6bEAltu2kNhnUORZ5XKlpm4BeYnU2Z-40`
        },
    });
    return response.data;
};

export const fetchFilmsByName = async (query) => {
    const response = await axios.get(`/search/movie`, {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWI0NzEzN2NhNjkwNmM3ZjE2NjQ0NTc0ZDFjM2JlNSIsInN1YiI6IjY2NTA4MTQ3ZGRjYzlhM2RlZmRkOGI3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wPJftTOwxE6bEAltu2kNhnUORZ5XKlpm4BeYnU2Z-40`
        },
        params: {
            query: query,
            include_adult: false,
            language: 'en-US',
        }
    });
    return response.data;
};