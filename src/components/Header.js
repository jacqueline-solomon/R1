import React from "react";

const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <h1>DESTINATION</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">PLACE</a></li>
                    <li><a href="/">CATEGORY</a></li>
                    <li><a href="/">ABOUT</a></li>
                    <li><a href="/">CONTACT</a></li>
                </ul>
            </nav>
            <div className="btn">
                <button type="button">signin</button>
            </div>
        </div>
    );
}
export default Header;
