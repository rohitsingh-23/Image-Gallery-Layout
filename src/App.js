import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ImageCard from "./components/ImageCard";

const App = () => {
  const cardData = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  const [navSelected, setNavSelected] = useState("home");

  return (
    <div className="app">
          <Navbar setNavSelected={ setNavSelected} />
      <div className="image-card-container">
        {navSelected == "home" ? (
          cardData.map((item, index) => {
            let name = `Random Title ${index + 1}`;
            let price = `$${(Math.random() * 100).toFixed(2)}`;
            return <ImageCard title={name} price={price} />;
          })
        ) : navSelected == "gallery" ? (
          <h1>Gallery</h1>
        ) : navSelected == "contact" ? (
          <h1>Contact</h1>
        ) : navSelected == "about" ? (
          <h1>About</h1>
        ) : (
          <h1>Something Went Wrong</h1>
        )}
      </div>
    </div>
  );
};

export default App;
