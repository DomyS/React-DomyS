import React from "react";
import Particles from "./Particles";
import "./App.css";
import Card from "./Card/Card";
import Header from "./Header/Header";
import weatherApp from "./img/weatherApp.png";
import reactRecipe from "./img/reactRecipe.png";
import snakeGame from "./img/snakeGame.png";
import covid from "./img/covid.png";
import slideForm from "./img/slideForm.png";
import toggl from "./img/toggl.png";
import Social from "./socialMed/Social";
import Tabs from "./Tabs/Tabs";
import Tab from "./Tabs/Tab";
import FyloLanding from "./img/FyloLand.png";
import ImageSearch from "./img/imageSearch.png";
import Veure from "./img/Veure.png";

const styles = {
  root: {
    fontFamily: "sans-serif",
    textAlign: "center",
    height: "100%",
    width: "100%",
    background: "#2D3047",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: "-1",
  },
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
        <Tabs>
          <Tab title="React">
            <Card
              heading1="Recipe App with React"
              heading3="Using React, API"
              form={reactRecipe}
              live="https://domys.github.io/Recipe-App-with-React/"
              code="https://github.com/DomyS/Recipe-App-with-React"
            />
            <Card
              heading1="Covid-19 Tracker"
              heading3="Using React, API, Chart.js"
              form={covid}
              live="https://covid-19-tracker1.netlify.com/"
              code="https://github.com/DomyS/Covid-19-Tracker"
            />
            <Card
              heading1="Fylo Landing Page"
              heading3="Using React, FlexBox, Scss"
              form={FyloLanding}
              live="https://fylo-land.netlify.com/"
              code="https://github.com/DomyS/Fylo-landing-page"
            />
            <Card
              heading1="React Image search"
              heading3="Using React, Unsplash API"
              form={ImageSearch}
              live="https://photo-search-api-domy.herokuapp.com/"
              code="https://github.com/DomyS/React-photo-search"
            />
          </Tab>
          <Tab title="Javascript">
            <Card
              heading1="Veure E-shop"
              heading3="Using Javascript, Scss, LocalStorage"
              form={Veure}
              live="https://veure-e-shop.now.sh/"
              code="https://github.com/DomyS/Veure-e-shop"
            />
            <Card
              heading1="Pricing Card with toggle"
              heading3="Using HTML, CSS, JavaScript"
              form={toggl}
              live="https://domys.github.io/Pricing-Component-with-toggle/"
              code="https://github.com/DomyS/Pricing-Component-with-toggle"
            />
            <Card
              heading1="Snake Game"
              heading3="Using HTML, JavaScript"
              form={snakeGame}
              live="https://domys.github.io/Snake-Game/"
              code="https://github.com/DomyS/Snake-Game"
            />
            <Card
              heading1="Slide Form"
              heading3="Using HTML, CSS, JavaScript"
              form={slideForm}
              live="https://domys.github.io/Sliding-Sign-In-Form/"
              code="https://github.com/DomyS/Sliding-Sign-In-Form"
            />
          </Tab>
          <Tab title="API">
            <Card
              heading1="Weather App"
              heading3="Using HTML, CSS, JavaScript, API"
              form={weatherApp}
              live="https://domys.github.io/Weather-App/"
              code="https://github.com/DomyS/Weather-App"
            />
            <Card
              heading1="Recipe App with React"
              heading3="Using React, API"
              form={reactRecipe}
              live="https://domys.github.io/Recipe-App-with-React/"
              code="https://github.com/DomyS/Recipe-App-with-React"
            />
            <Card
              heading1="Covid-19 Tracker"
              heading3="Using React, API, Chart.js"
              form={covid}
              live="https://covid-19-tracker1.netlify.com/"
              code="https://github.com/DomyS/Covid-19-Tracker"
            />
            <Card
              heading1="React Image search"
              heading3="Using React, Unsplash API"
              form={ImageSearch}
              live="https://photo-search-api-domy.herokuapp.com/"
              code="https://github.com/DomyS/React-photo-search"
            />
          </Tab>
        </Tabs>
      </div>
      <div className="social">
        <Social />
      </div>
    </div>
  );
}

export default App;
