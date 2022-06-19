import { AiOutlineHeart as Heart, AiFillHeart as FilledHeart } from 'react-icons/ai';
import { useState } from 'react';

export const Palette = (props) => {
    // const colors = [
    //     "#251D3A",
    //     "#2A2550",
    //     "#E04D01",
    //     "#FF7700",
    // ]
    const colors = props.colors;
    const width = props.width;
    const [likeCount, setLikeCount] = useState(props.likes);
    const [liked, setLiked] = useState(false);

    const copy = (str) => {
        console.log(str, "copied!");
    }

    return (
        <div className="item">
            <div
                className="palette"
                style={{
                    width: `${width}vh`,
                    height: `${width}vh`,
                }}
            >
                <div 
                    className="color" 
                    style={{
                        backgroundColor: colors[0],
                        height: `${width}vh`,
                        width: `${width}vh`
                    }}
                >
                    <span 
                        onClick={() => copy(colors[0])}
                        className="color-link"
                    >
                        {colors[0]}
                    </span>
                </div>
                <div 
                    className="color" 
                    style={{
                        backgroundColor: colors[1],
                        height: `${width / 1.5}vh`,
                        width: `${width}vh`
                    }}
                >
                    <span 
                        onClick={() => copy(colors[1])}
                        className="color-link"
                    >
                        {colors[1]}
                    </span>
                </div>
                <div 
                    className="color" 
                    style={{
                        backgroundColor: colors[2],
                        height: `${width / 2.8}vh`,
                        width: `${width}vh`
                    }}
                >
                    <span 
                        onClick={() => copy(colors[2])}
                        className="color-link"
                    >
                        {colors[2]}
                    </span>
                </div>
                <div 
                    className="color" 
                    style={{
                        backgroundColor: colors[3],
                        height: `${width / 6}vh`,
                        width: `${width}vh`
                    }}
                >
                    <span 
                        onClick={() => copy(colors[3])}
                        className="color-link"
                    >
                        {colors[3]}
                    </span>
                </div>
            </div>

            <div className="palette-like">
                <div>
                    {(liked) ? <FilledHeart /> : <Heart />}
                </div>
                <div className="likes-count">
                    {likeCount}
                </div>
            </div>
        </div>
    )
}