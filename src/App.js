import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Layout, Sidebar, Window, Popular, Generate, Random, Collection } from "./components";
import { Login, Profile, Register } from "./Auth";
import { AuthProvider } from "./context/auth";

function App() {
  return (
    <>
      <React.Fragment>
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/"
            element={<div>
              <Layout />
              <div className="window">
                <Popular />
              </div>
            </div>}
          />
          <Route
            path="/generate"
            element={<div>
              <Layout />
              <div className="window">
                <Generate />
              </div>
            </div>}
          />
          <Route
            path="/random"
            element={<div>
              <Layout />
              <div className="window">
                <Random />
              </div>
            </div>}
          />
          <Route
            path="/collection"
            element={<div>
              <Layout />
              <div className="window">
                <Collection />
              </div>
            </div>}
          />
        </Routes>
      </React.Fragment>
    </>
  );
}

export default App;
