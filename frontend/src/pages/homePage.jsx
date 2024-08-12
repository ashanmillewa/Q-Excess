import React from "react";
import IMG1 from '../assets/images/img(1).jpg';
import IMG2 from '../assets/images/img(2).jpg';
import IMG3 from '../assets/images/img(3).jpg';
import IMG4 from '../assets/images/img(4).jpg';
import './homePage.css'
import '../pages/detailsPage'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function App() {
  
  // const[game_id] =useEffect([]);
  // const navigate = useNavigate()

  // const navigateToDetailsPage=()=>{
  //   navigate("/detailsPage");
  // }

  let navigate = useNavigate(); 
  const navigateToDetailsPage = () =>{ 
    let path = ``; 
    navigate(path);
  }

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto' }}>
      <h2>Home</h2>
      <div className="game-1">
        <img src={IMG1} className="img1" />
        <button className="seemore-btn1" onClick={() => navigateToDetailsPage(game_id)}>See more</button>
        
      </div>

      <div className="game-2">
        <img src={IMG2} className="img2" />
        <button className="seemore-btn2" onClick={() => navigateToDetailsPage(game_id)}>See more</button>
      </div>

      <div className="game-3">
        <img src={IMG3} className="img3" />
        <button className="seemore-btn3" onClick={() => navigateToDetailsPage(game_id)}>See more</button>
      </div>

      <div className="game-4">
        <img src={IMG4} className="img4" />
        <button className="seemore-btn4" onClick={() => navigateToDetailsPage(game_id)}>See more</button>
      </div>
    </div>
  );
}

export default App;