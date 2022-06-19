import { Palette } from "./Palette";
import { useState, useEffect } from "react";
import axios from "axios";

export const Popular = () => {
     const colors = [
        "#251D3A",
        "#2A2550",
        "#E04D01",
        "#FF7700",
    ]
    const paletteWidth = 130 / 3;
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
        axios.request(options)
            .then(res => {
                setPopularPalettes(res.data);
                // console.log(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [])

    return (
        <div>
            <div className="container">
                {popularPalettes.map((palette, i) => 
                    <Palette
                        key={i}
                        colors={palette.colors}
                        width={paletteWidth}
                        likes={Math.floor(Math.random()*1000)}    
                    />
                )}
            </div>
        </div>
    )
}