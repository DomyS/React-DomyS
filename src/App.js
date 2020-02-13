import React from "react";
import Particles from "./Particles";
import "./App.css";
import Card from "./Card/Card";
import Header from "./Header/Header";
import Logo1 from "./img/logo1.png";
import weatherApp from "./img/weatherApp.png";
import reactRecipe from "./img/reactRecipe.png";
import snakeGame from "./img/snakeGame.png";
import memoryGame from "./img/memoryGame.png";
import slideForm from "./img/slideForm.png";
import stepForm from "./img/stepForm.png";
import toggl from "./img/toggl.png";
import Social from "./socialMed/Social";

const styles = {
  root: {
    fontFamily: "sans-serif",
    textAlign: "center",
    height: "100%",
    width: "100%",
    background: "#2D3047",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: "-1"
  }
};

function App() {
  return (
    <div className="App" style={styles.root}>
      <Particles />
      {/* header */}
      <div className="header">
        <Header />
      </div>
      <div className="cardMain">
        <Card
          heading1="Recipe App with React"
          heading3="Using React, API"
          form={reactRecipe}
          link="https://domys.github.io/Recipe-App-with-React/"
          link2="https://github.com/DomyS/Recipe-App-with-React"
        />
        <Card
          heading1="Pricing Card with toggle"
          heading3="Using HTML, CSS, JavaScript"
          form={toggl}
          link="https://domys.github.io/Pricing-Component-with-toggle/"
          link2="https://github.com/DomyS/Pricing-Component-with-toggle"
        />
        <Card
          heading1="Weather App"
          heading3="Using HTML, CSS, JavaScript, API"
          form={weatherApp}
          link="https://domys.github.io/Weather-App/"
          link2="https://github.com/DomyS/Weather-App"
        />
        <Card
          heading1="Snake Game"
          heading3="Using HTML, JavaScript"
          form={snakeGame}
          link="https://domys.github.io/Snake-Game/"
          link2="https://github.com/DomyS/Snake-Game"
        />
        <Card
          heading1="Slide Form"
          heading3="Using HTML, CSS, JavaScript"
          form={slideForm}
          link="https://domys.github.io/Sliding-Sign-In-Form/"
          link2="https://github.com/DomyS/Sliding-Sign-In-Form"
        />
        <Card
          heading1="Memory Game"
          heading3="Using HTML, CSS, Flexbox, JavaScript"
          form={memoryGame}
          link="https://domys.github.io/memory-game/"
          link2="https://github.com/DomyS/memory-game"
        />
      </div>
      <div className="social">
        <Social />
      </div>
    </div>
  );
}

export default App;
