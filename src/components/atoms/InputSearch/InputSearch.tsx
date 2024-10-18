import "./inputSearchStyles.css";
import { FaSearch } from "react-icons/fa";


export default function InputSearch(): React.ReactNode {
    return (
        <div className="search-input">
            <input className="input" type="text" />
            <FaSearch className="icon" />
        </div>
    );
}