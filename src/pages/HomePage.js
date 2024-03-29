import React, { useEffect, useState } from "react";
import classes from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPlayerState } from "../slices/playerSlice";
import { resetTilesState } from "../slices/tilesSlice";
import { resetTilesArray } from "../slices/tilesSliceDynamic";
import { resetTilesHardMode } from "../slices/tilesSliceHard";
import Lottie from "lottie-react";
import TicTacToeAnimation from "../Animations/TicTacToeAnimation.json"
import tictactoe from "../Animations/tictactoe.json"

const HomePage = () => {
  const [showAnimation,setShowAnimation] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateHandler = (path) => {
    dispatch(resetPlayerState());
    dispatch(resetTilesState());
    dispatch(resetTilesArray());
    dispatch(resetTilesHardMode());
    navigate(path);
  };
  useEffect(()=>{
    setTimeout(()=>{
      setShowAnimation(false)
    },6000)
  },[])
  return (
    <div className={classes.container}>
    {/* {showAnimation? */}
      {/* <Lottie
      animationData={tictactoe}
      className={classes.animation}
    />:
   */}
  {/* <> */}
      <div className={classes.game_title}>
        <h1 className={classes.title}>Tic-Tac-Toe</h1>
      </div>
      <div className={classes.x_img_container}>
        <img
          src="/assets/images/bg_x.png"
          alt="X mark"
          className={classes.x_img}
        />
      </div>
      <div className={classes.circle_img_container}>
        <img
          src="/assets/images/bg_circle.png"
          alt="Circle mark"
          className={classes.circle_img}
        />
      </div>

      <div className={classes.game_mode_container}>
       
        <button
          className={classes.computer_btn}
          onClick={() => navigateHandler("/single-player/levels")}
        >
          1 Player
        </button>
        <button
          className={classes.multiplayer_btn}
          onClick={() => navigateHandler("/multi-player/levels")}
        >
          2 Players
        </button>
      </div>
      {/* </> */}
    {/* // } */}
    </div>
  );
};

export default HomePage;
