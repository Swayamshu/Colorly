import { Routes, Route } from "react-router-dom";
import { Popular } from "./Popular";
import { Generate } from "./Generate";
import { Random } from "./Random";
import { Collection } from "./Collection";

export const Window = () => {
    return (
        <div className="window">
            <Routes>
                <Route
                    path="/"
                    element={<Popular />}
                />
                <Route
                    path="/generate"
                    element={<Generate />}
                />
                <Route
                    path="/random"
                    element={<Random />}
                />
                <Route
                    path="/collection"
                    element={<Collection />}
                />
            </Routes>
        </div>
    )
}