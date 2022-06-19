import { Navbar } from "react-bootstrap"
import { Search } from "./Search"
import { useNavigate } from "react-router-dom";

export const Header = () => {
    let navigate = useNavigate();

    const routeChange = (path) => {
        navigate(path);
    }

    return (
        <div className="navbar">
            <div
                style={{cursor:"pointer"}}
                onClick={() => routeChange("/")}
            >
                Colors
            </div>
            <input
                className="search-box"
                type="text"
                placeholder="Search Palettes"
            >
            </input>
        </div>
    )
}