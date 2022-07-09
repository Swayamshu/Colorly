import { Palette } from "./";
import { useState, useEffect } from "react";
import { useAuth } from "../context/auth";
import { TailSpin } from "react-loader-spinner";

const Popular = () => {
    const { paletteWidth, loading, setLoading } = useAuth();
    const [popularPalettes, setPopularPalettes] = useState([]);

    const axios = require("axios");

    const options = {
        method: 'GET',
        url: 'https://color-hunter.p.rapidapi.com/api/v1/color',
        params: {
            type: 'popular',
            random: 'false',
            limit: 100,
        },
        headers: {
            'X-RapidAPI-Key': '124d5d93f5msh15031b5a949a625p1bc8b7jsnfc43bcf6c50a',
            'X-RapidAPI-Host': 'color-hunter.p.rapidapi.com'
        }
    };

    useEffect(() => {
        setLoading(true);
        axios.request(options)
            .then(res => {
                setPopularPalettes(res.data);
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => setLoading(false));
    }, [])

    return (
        <div>
            <div className="container">
                {loading ?
                    <div className="spinner">
                        <TailSpin width="80" color="#F23557"/>
                    </div>
                    :
                    popularPalettes.map((palette, i) =>
                        <Palette
                            key={i}
                            colors={palette.colors}
                            width={paletteWidth}
                            likes={0}
                            paletteId={palette.code}
                            tags={palette.tags}
                            likeState={false}
                        />
                    )
                }
            </div>
        </div>
    )
};

export default Popular;