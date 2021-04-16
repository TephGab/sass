import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="title">
                <img src="./media/logo.png" alt="logo" /> 
                <h1>Travel Agency</h1>
            </div>
            <div className="nav">
                <ul>
                    <li>Store</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="line"></div>
        </header>
    );
};

export default Header;