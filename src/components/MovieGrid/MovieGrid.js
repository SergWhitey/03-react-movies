import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './MovieGrid.module.css';
const MovieGrid = ({ movies, onSelect }) => {
    if (movies.length === 0) {
        return null;
    }
    return (_jsx("ul", { className: styles.grid, children: movies.map((movie) => (_jsx("li", { children: _jsxs("div", { className: styles.card, onClick: () => onSelect(movie), children: [movie.poster_path ? (_jsx("img", { className: styles.image, src: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, alt: movie.title, loading: "lazy" })) : (_jsx("div", { className: styles.image, style: { backgroundColor: '#ccc' }, children: "No Image" })), _jsx("h2", { className: styles.title, children: movie.title })] }) }, movie.id))) }));
};
export default MovieGrid;
