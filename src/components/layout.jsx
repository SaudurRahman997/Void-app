// Galaxies.jsx (or Stars.jsx, Planets.jsx)
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import EarthScene from "./earthScene";
import Planets from "./planets";
function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default Layout;
