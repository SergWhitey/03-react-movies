import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './SearchBar.module.css';
import { toast } from 'react-hot-toast';
const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = query.trim();
        if (!trimmed) {
            toast.error('Please enter your search query.');
            return;
        }
        onSubmit(trimmed);
        setQuery('');
    };
    return (_jsx("header", { className: styles.header, children: _jsxs("div", { className: styles.container, children: [_jsx("a", { className: styles.link, href: "https://www.themoviedb.org/", target: "_blank", rel: "noopener noreferrer", children: "Powered by TMDB" }), _jsxs("form", { className: styles.form, onSubmit: handleSubmit, children: [_jsx("input", { className: styles.input, type: "text", name: "query", autoComplete: "off", placeholder: "Search movies...", autoFocus: true, value: query, onChange: (e) => setQuery(e.target.value) }), _jsx("button", { className: styles.button, type: "submit", children: "Search" })] })] }) }));
};
export default SearchBar;
