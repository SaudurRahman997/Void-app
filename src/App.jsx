import { useState } from "react";
import EarthScene from "./components/earthScene.jsx";
import Navbar from "./components/navbar.jsx";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <EarthScene />
      <Navbar />
    </div>
  );
}

export default App;
