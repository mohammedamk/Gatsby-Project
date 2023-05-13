import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import "../styles/global.css"

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {children}
            </div>
            <Footer />

            <div className="copyright">
            <p>Copyright © 2023 Mumbai Driven</p>
            </div>
        </div>
    )
}