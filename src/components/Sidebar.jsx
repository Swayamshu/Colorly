import { useNavigate } from "react-router";
import { useAuth } from "../context/auth";

const Sidebar = () => {
    let navigate = useNavigate();
    const { logout } = useAuth();

    return (
        <div className="sidebar">
            <ul className="sidebar-navs">
                <li onClick={() => navigate("/")}>
                    Popular
                </li>
                <li onClick={() => navigate("/Generate")}>
                    Generate
                </li>
                <li onClick={() => navigate("/Random")}>
                    Random
                </li>
                <li onClick={() => navigate("/Collection")}>
                    Collection
                </li>
            </ul>
            <div onClick={() => navigate("/login")}>
                Login
            </div>
            <div onClick={() => {
                logout();
                navigate("/login");
            }}>
                Logout
            </div>
        </div>
    )
};

export default Sidebar;