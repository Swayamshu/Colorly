import { AiOutlineHeart as Heart, AiFillHeart as FilledHeart } from 'react-icons/ai';
import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import axios from '../utils/axios';
import { useAuth } from '../context/auth';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Palette = (props) => {
    const { userId } = useAuth();
    const colors = props.colors;
    const width = props.width;
    const [paletteId, setPaletteId] = useState(props.paletteId);
    const [likeCount, setLikeCount] = useState(props.likes);
    const [liked, setLiked] = useState(props.likeState);

    const likeToggle = (likeState) => {
        if (likeState) {
            toast.info("Palette unsaved!"); 
        } else {
            toast.success("Palette saved!");
        }
        setLiked(prevState => !prevState);
        setLikeCount(prevCount => {
            if (likeState) return prevCount - 1;
            return prevCount + 1;
        });

        const paletteData = {
            paletteId: paletteId,
            colors: colors,
            likedByUser: userId,
            likes: likeCount,
        }
        
        if (likeState === false) {
            axios.patch("/palette", paletteData)
                .then((res) => {
                    console.log("saved");
                    console.log(res.data);
                })
                .catch((err) => {
                    toast.error(err.response.data);
                });   
        } else {
            axios.patch("/palette/unsave", paletteData)
                .then((res) => {
                    console.log("unsaved");
                    console.log(res.data);
                })
                .catch((err) => {
                    toast.error(err.response.data);
                });   
        }
    }

    const copy = (str) => {
        // const copyTimeout = setTimeout(() => {
        //     const element = 
        // })
        toast.success("Color Copied!");
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
                    <CopyToClipboard
                        text={colors[0]}
                        onCopy={() => copy(colors[0])}
                    >
                        <span className="color-link">
                            {colors[0]}
                        </span>
                    </CopyToClipboard>
                </div>
                <div 
                    className="color" 
                    style={{
                        backgroundColor: colors[1],
                        height: `${width / 1.5}vh`,
                        width: `${width}vh`
                    }}
                >
                    <CopyToClipboard
                        text={colors[1]}
                        onCopy={() => copy(colors[1])}
                    >
                        <span className="color-link">
                            {colors[1]}
                        </span>
                    </CopyToClipboard>
                </div>
                <div 
                    className="color" 
                    style={{
                        backgroundColor: colors[2],
                        height: `${width / 2.8}vh`,
                        width: `${width}vh`
                    }}
                >
                    <CopyToClipboard
                        text={colors[2]}
                        onCopy={() => copy(colors[2])}
                    >
                        <span className="color-link">
                            {colors[2]}
                        </span>
                    </CopyToClipboard>
                </div>
                <div 
                    className="color" 
                    style={{
                        backgroundColor: colors[3],
                        height: `${width / 6}vh`,
                        width: `${width}vh`
                    }}
                >
                    <CopyToClipboard
                        text={colors[3]}
                        onCopy={() => copy(colors[3])}
                    >
                        <span className="color-link">
                            {colors[3]}
                        </span>
                    </CopyToClipboard>
                </div>
            </div>

            <div className="palette-like">
                <div onClick={() => likeToggle(liked)}>
                    {(liked) ? <FilledHeart /> : <Heart />}
                </div>
                <div className="likes-count">
                    {likeCount}
                </div>
            </div>
        </div>
    )
}

export default Palette;