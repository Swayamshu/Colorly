import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
    let navigate = useNavigate();

    const routeChange = (path) => {
        navigate(path);
    }

    return (
        <div className="sidebar">
            <ul className="sidebar-navs">
                <li onClick={() => routeChange("/")}>
                    Popular
                </li>
                <li onClick={() => routeChange("/Generate")}>
                    Generate
                </li>
                <li onClick={() => routeChange("/Random")}>
                    Random
                </li>
                <li onClick={() => routeChange("/Collection")}>
                    Collection
                </li>
            </ul>
        </div>
    )
}