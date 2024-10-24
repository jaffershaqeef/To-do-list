import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Herosection from "./components/Herosection/index";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <>
          <Navbar  />
          <Routes>
            <Route path="/" element={<Herosection />} />      
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
