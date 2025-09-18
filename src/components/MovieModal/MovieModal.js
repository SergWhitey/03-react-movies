import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './MovieModal.module.css';
const MovieModal = ({ movie, onClose }) => {
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    return ReactDOM.createPortal(_jsx("div", { className: styles.backdrop, role: "dialog", "aria-modal": "true", onClick: handleBackdropClick, children: _jsxs("div", { className: styles.modal, children: [_jsx("button", { className: styles.closeButton, "aria-label": "Close modal", onClick: onClose, children: "\u00D7" }), movie.backdrop_path && (_jsx("img", { src: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`, alt: movie.title, className: styles.image })), _jsxs("div", { className: styles.content, children: [_jsx("h2", { children: movie.title }), _jsx("p", { children: movie.overview }), _jsxs("p", { children: [_jsx("strong", { children: "Release Date:" }), " ", movie.release_date] }), _jsxs("p", { children: [_jsx("strong", { children: "Rating:" }), " ", movie.vote_average, "/10"] })] })] }) }), document.body);
};
export default MovieModal;
