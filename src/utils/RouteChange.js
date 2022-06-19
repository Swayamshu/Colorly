import { useNavigate } from "react-router";

const RouteChange = (path) => {
    let navigate = useNavigate();
    navigate(path);
}

export default RouteChange;