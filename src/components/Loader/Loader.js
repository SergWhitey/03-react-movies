import { jsx as _jsx } from "react/jsx-runtime";
import styles from './Loader.module.css';
const Loader = () => {
    return _jsx("p", { className: styles.text, children: "Loading movies, please wait..." });
};
export default Loader;
