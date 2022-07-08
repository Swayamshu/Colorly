import React from "react";
import { Palette } from "./";
import { useState, useEffect } from "react";
// import uniqid from "uniqid";

const Generate = () => {
    const colors = [
        "#F15412",
        "#34B3F1",
        "#FF06B7",
        "#FFA500",
    ]
    const [palette, setPalette] = useState([]);
    const [likeCount, setLikeCount] = useState(0);
    const [likeState, setLikeState] = useState(false);

    const componentToHex = (c) => {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    const rgbToHex = ([r, g, b]) => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    var url = "http://colormind.io/api/";
    var data = {
        model: "default",
        // input : [[44,43,44],[90,83,82],"N","N","N"]
    }
    var http = new XMLHttpRequest();

    const getNewPalette = async () => {
        http.onreadystatechange = function () {
            if (http.readyState === 4 && http.status === 200) {
                var palette = JSON.parse(http.responseText).result;
                var temp_palette = [];
                palette.forEach(rgb => {
                    temp_palette.push(rgbToHex(rgb));
                });
                setPalette(temp_palette);
            }
        }
        http.open("POST", url, true);
        http.send(JSON.stringify(data));
    }

    useEffect(() => {
        window.addEventListener("keydown", keyDownHandler);
        getNewPalette();

        return () => {
            window.removeEventListener("keydown", keyDownHandler);
        }
    }, [likeState])
    
    const keyDownHandler = (e) => {
        // console.log(e);
        if (e.code === "Space") {
            getNewPalette();
            setLikeCount(0);
            setLikeState(false);
            console.log(likeState, likeCount);
        }
    }
    
    return (
        <div className="container">
            <Palette
                colors={palette}
                width={75}
                likes={likeCount}
                paletteId=""
                tags=""
                likeState={likeState}
            />
        </div>
    )
};

export default Generate;