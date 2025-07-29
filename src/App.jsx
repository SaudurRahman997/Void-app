import { useState } from "react";
import EarthScene from "./components/earthScene.jsx";
import Navbar from "./components/navbar.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


function App() {
  const [showNavbar, setShowNavbar] = useState(false);


  return
  // <BrowserRouter>
  //   <div className="relative w-screen h-screen overflow-hidden">
  //     <EarthScene />
  //     <Navbar />

  //   </div>
  // </BrowserRouter>

}

export default App;
