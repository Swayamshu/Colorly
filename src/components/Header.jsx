import { Search } from "./Search"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import {ReactComponent as Logo} from "../assets/colory.svg";

const Header = () => {
    let navigate = useNavigate();
    const { profileName } = useAuth();

    return (
        <div className="navbar">
            <div
                onClick={() => navigate("/")}
            >
                <Logo className="logo" />
            </div>
            <input
                className="search-box"
                type="text"
                placeholder="Search Palettes"
            >
            </input>
            <div
                className="profile-info"
            >
                <div className="profile-name">{profileName}</div>
                {/* <div className="dropdown">
                    <div className="dropdown-content">
                        Logout
                    </div>
                </div> */}
            </div>
        </div>
    )
};

export default Header;