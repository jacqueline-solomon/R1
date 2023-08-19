import React from "react";

const Main = () => {
    return(
        <div className="main">
            <div className="col col1">
            <h2>Dream Place</h2>
                <p>I can't change the direction of the wind,<br  /> but I can adjust my sails to always reach my destination.<br />If you want to select more, just click the button.</p>
                <button type="button">More</button>
            </div>
            <div className="col">
                <div className="card card1"></div>
                <div className="card card2"></div>
                <div className="card card3"></div>
                <div className="card card4"></div>
                <div className="card card5"></div>
                <div className="card card6"></div>
            </div>
        </div>
    );
}
export default Main;