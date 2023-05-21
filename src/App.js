import React from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="app-body">
          <Body />
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
