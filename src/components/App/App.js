import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import { fetchMovies } from '../../../services/movieService';
import SearchBar from '../../SearchBar/SearchBar';
import MovieGrid from '../../MovieGrid/MovieGrid';
import Loader from '../../Loader/Loader';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import MovieModal from '../MovieModal';
const token = import.meta.env.VITE_TMDB_TOKEN;
import '../../index.css';
const App = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleSearch = async (query) => {
        setError(null);
        setLoading(true);
        setMovies([]);
        try {
            const results = await fetchMovies(query);
            if (results.length === 0) {
                toast.error('No movies found for your request.');
            }
            setMovies(results);
        }
        catch (err) {
            console.error(err);
            setError('Error fetching movies');
            toast.error('There was an error, please try again...');
        }
        finally {
            setLoading(false);
        }
    };
    const handleSelectMovie = (movie) => {
        setSelectedMovie(movie);
    };
    const handleCloseModal = () => {
        setSelectedMovie(null);
    };
    return (_jsxs("div", { children: [_jsx(Toaster, { position: "top-right" }), _jsx(SearchBar, { onSubmit: handleSearch }), loading && _jsx(Loader, {}), error && _jsx(ErrorMessage, {}), !loading && !error && _jsx(MovieGrid, { movies: movies, onSelect: handleSelectMovie }), selectedMovie && _jsx(MovieModal, { movie: selectedMovie, onClose: handleCloseModal })] }));
};
export default App;
