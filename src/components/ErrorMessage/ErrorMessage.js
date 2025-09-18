import { jsx as _jsx } from "react/jsx-runtime";
import styles from './ErrorMessage.module.css';
const ErrorMessage = () => {
    return _jsx("p", { className: styles.text, children: "There was an error, please try again..." });
};
export default ErrorMessage;
