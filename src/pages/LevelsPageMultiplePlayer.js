import React from 'react'
import classes from "./LevelsPage.module.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetPlayerState, setInitialTurn, toggleTurn } from '../slices/playerSlice';
import { resetTilesState } from '../slices/tilesSlice';
import { resetTilesArray } from '../slices/tilesSliceDynamic';
import { resetTilesHardMode } from '../slices/tilesSliceHard';
import { resetGameOver } from '../slices/gameOverSlice';
import { resetTiles5Slice } from '../slices/tiles5Slice';
import { resetTiles7Slice } from '../slices/grid7Slice';
import { closeModal } from '../slices/modalSlice';

const LevelsPageMultiplePlayer = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleNavigate=(path)=>{
        dispatch(resetPlayerState());
        dispatch(resetTilesState());
        dispatch(resetTilesArray());
        dispatch(resetTilesHardMode());
        dispatch(resetGameOver());
        dispatch(setInitialTurn())
        dispatch(resetTiles5Slice())
        dispatch(resetTiles7Slice());
        dispatch(closeModal());
        // localStorage.removeItem("modal")
        // localStorage.removeItem("WINNER");
        // dispatch(setTurn())
        // dispatch(toggleTurn());
        navigate(path);
    }
  return (
    <div className={classes.container}>
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
          className={classes.easy_btn}
          onClick={()=>handleNavigate("/game-mode-multiplayer")}
        >
         3*3 Mode
        </button>
        <button
          className={classes.easy_btn}
          onClick={()=>handleNavigate("/game-mode-multiplayer/5*5")}
        >
          5*5 Mode
        </button>
        <button
          className={classes.easy_btn}
          onClick={()=>handleNavigate("/game-mode-multiplayer/7*7")}
        >
          7*7 Mode
        </button>
      </div>
    </div>
  )
}

export default LevelsPageMultiplePlayer;