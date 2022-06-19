import React from "react";
import { Palette } from "./Palette";
import { useState, useEffect } from "react";
import RgbToHex from "../utils/RgbToHex";

export const Generate = () => {
    const colors = [
        "#F15412",
        "#34B3F1",
        "#FF06B7",
        "#FFA500",
    ]
    const [palette, setPalette] = useState(colors);

    const componentToHex = (c) => {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    const rgbToHex = ([r, g, b]) => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    useEffect(() => {
        var url = "http://colormind.io/api/";
        var data = {
            model : "default",
            // input : [[44,43,44],[90,83,82],"N","N","N"]
        }
        var http = new XMLHttpRequest();

        http.onreadystatechange = function() {
            if(http.readyState === 4 && http.status === 200) {
                var palette = JSON.parse(http.responseText).result;

                var temp_palette = [];
                palette.forEach(rgb => {
                    temp_palette.push(rgbToHex(rgb));
                });
                // console.log(palette);
                // console.log(temp_palette);
                setPalette(temp_palette);
            }
        }
        
        http.open("POST", url, true);
        http.send(JSON.stringify(data));
    }, [])
    
    return (
        <div className="container">
            <Palette
                colors={palette}
                width={75}
                likes={0}
            />
        </div>
    )
}