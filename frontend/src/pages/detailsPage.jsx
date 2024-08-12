import React from "react";
import IMG1 from '../assets/images/img(1).jpg';
import './detailsPage.css'


function detailsPage() {
    return (
        <div style={{ maxWidth: '300px', margin: '0 auto' }}>
            <h2>GAME DETAILS</h2>
            <div className="game-1">
                <img src={IMG1} className="img1" />
                <p> Description about the game:{description}</p>
                <p>Price :{price}</p>
            </div>
        </div>
    );
}

export default detailsPage;