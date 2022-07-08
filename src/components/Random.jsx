import { useState, useEffect } from "react";
import { Palette } from "./";

const Random = () => {
    const paletteWidth = 130 / 3;
    const [paletteType, setPaletteType] = useState("Random");
    const [randomPalettes, setRandomPalettes] = useState([]);

    const axios = require("axios");

    const options = {
        method: 'GET',
        url: `https://random-palette-generator.p.rapidapi.com/palette/100/4`,
        headers: {
            'X-RapidAPI-Key': '124d5d93f5msh15031b5a949a625p1bc8b7jsnfc43bcf6c50a',
            'X-RapidAPI-Host': 'random-palette-generator.p.rapidapi.com'
        }
    };

    useEffect(() => {
        axios.request(options)
            .then(res => {
                const data = res.data.data;
                setRandomPalettes(data);
                setPaletteType(res.data.type);
                // console.log(data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);
    
    return (
        <div>
            <div className="dropdown">
                <button className="dropbtn">{paletteType}</button>
                <div className="dropdown-content">
                    <a href="/temp">Link 1</a>
                    <a href="/temp">Link 2</a>
                    <a href="/temp">Link 3</a>
                </div>
            </div>
            <div className="container">
                {randomPalettes.map((palette, i) => 
                    <Palette
                        key={i}
                        colors={palette.palette}
                        width={paletteWidth}
                        likes={0}
                        paletteId=""
                        tags=""
                        likeState={false}
                    />
                )}
            </div>
        </div>
    )
}

export default Random;