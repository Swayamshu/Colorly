import { Search } from "./Search"
import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo.svg";

const Header = () => {
    let navigate = useNavigate();

    const routeChange = (path) => {
        navigate(path);
    }

    return (
        <div className="navbar">
            <div
                className="logo"
                onClick={() => routeChange("/")}
            >
                coolor.io
            </div>
            <input
                className="search-box"
                type="text"
                placeholder="Search Palettes"
            >
            </input>
        </div>
    )
};

export default Header;