import AuthRequired from "../middleware/authRequired";
import axios from "../utils/axios";
import { useAuth } from "../context/auth";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Palette from "./Palette";

const Collection = () => {
    const { paletteWidth, token } = useAuth();
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        axios.get("/palette", {
                headers: {
                    authorization: "Token " + token,
                }
            })
            .then((res) => {
                console.log(res.data);
                setCollection(res.data);
            })
            .catch((err) => {
                console.log(err);
                toast.error(err.response.data);
            });
    }, []);
    
    return (
        <AuthRequired>
            <div className="container">
                {collection.map((palette, i) => 
                    <Palette
                        key={i}
                        colors={palette.colors}
                        width={paletteWidth}
                        likes={palette.likes}
                        likeState={true}
                        paletteId={palette._id}
                    />
                )}
            </div>
        </AuthRequired>
    )
}

export default Collection;