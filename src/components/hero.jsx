import React from "react";
import CountdownTimer from "./countDownTimer";
import heroImage from "../assets/devfest.jpg";

const MainPage = () => {
  const targetDate = "November 04, 2023 09:00:00";

  return (
    <div className="hero-page">
      <div className="rectangular moveRectangle"></div>
      <div className="rectangular2"></div>
      <div className="square moveSquare"></div>
      <div className="left">
        <h1>
          GOOGLE <span>devfest</span> <br />
          <span>ADO EKITI</span> 2023
        </h1>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <div className="right">
        <div className="image-container">
          <img src={heroImage} alt="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
