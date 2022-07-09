import { useNavigate, useLocation } from "react-router";
import { useAuth } from "../context/auth";
import { BsStar, BsStarFill, BsPen, BsPenFill, BsShuffle, BsHeart, BsHeartFill } from "react-icons/bs";

const Sidebar = () => {
    let navigate = useNavigate();
    let path = useLocation().pathname;
    const { logout, token } = useAuth();

    return (
        <div className="sidebar">
            <ul className="sidebar-navs">
                <li
                    onClick={() => navigate("/")}
                    className={path === "/" ? "selected-sidebar" : ""}
                >
                    {path === "/" ?
                        <BsStarFill className="sidebar-icons" />
                        :
                        <BsStar className="sidebar-icons" />
                    } Popular
                </li>
                <li
                    onClick={() => navigate("/Generate")}
                    className={path === "/Generate" ? "selected-sidebar" : ""}
                >
                    {path === "/Generate" ?
                        <BsPenFill className="sidebar-icons" />
                        :
                        <BsPen className="sidebar-icons" />
                    } Generate
                </li>
                <li
                    onClick={() => navigate("/Random")}
                    className={path === "/Random" ? "selected-sidebar" : ""}
                >
                    <BsShuffle className="sidebar-icons"/> Random
                </li>
                <li
                    onClick={() => navigate("/Collection")}
                    className={path === "/Collection" ? "selected-sidebar" : ""}
                >
                    {path === "/Collection" ?
                        <BsHeartFill className="sidebar-icons" />
                        :
                        <BsHeart className="sidebar-icons" />
                    } Collection
                </li>
            </ul>
            {/* <div style={{display:"flex", justifyContent:"center"}}>
                <hr />
            </div> */}
            {token ?
                <button
                    className="login-logout-btn"
                    type="submit"
                    onClick={() => {
                        logout();
                        navigate("/login");
                    }}
                >
                    Logout
                </button>
                :
                <button
                    className="login-logout-btn"
                    type="submit"
                    onClick={() => navigate("/login")}
                >
                    Login
                </button>
            }
        </div>
    )
};

export default Sidebar;