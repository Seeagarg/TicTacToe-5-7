import React from "react";
import classes from "./GameOverModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { resetPlayerState,  toggleTurn } from "../slices/playerSlice";
import { resetTilesState } from "../slices/tilesSlice";
import { useNavigate } from "react-router-dom";
import { resetTilesArray } from "../slices/tilesSliceDynamic";
import { resetTilesHardMode } from "../slices/tilesSliceHard";
import { resetGameOver } from "../slices/gameOverSlice";
import { resetTiles5Slice } from "../slices/tiles5Slice";
import { resetTiles7Slice } from "../slices/grid7Slice";

const GameOverModal = ({ winner, winType, closeModalHandler, path }) => {



  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateHandler = (path) => {
    closeModalHandler();
    dispatch(resetPlayerState());
    dispatch(resetTilesState());
    dispatch(resetTilesArray());
    dispatch(resetTilesHardMode());
    dispatch(resetGameOver());
    dispatch(resetTiles7Slice())
    // dispatch(setTurn())
    navigate(path);
  };
  const closeModalAndResetState = () => {
    closeModalHandler();
    dispatch(resetPlayerState());
    dispatch(resetTilesState());
    dispatch(resetTilesArray());
    dispatch(resetTilesHardMode());
    dispatch(resetGameOver());
    dispatch(resetTiles5Slice())
    dispatch(resetTiles7Slice())
  };
  return (
    <div className={classes.container}>
      <div className={classes.sub_container}>
        <div className={classes.modal_img_container}>
          {winType == "0" ? (
            <img
              className={classes.modal_img}
              src="/assets/images/game_over.png"
              alt="result"
            />
          ) : (
            <img
              className={classes.modal_img}
              src="/assets/images/happy.png"
              alt="result"
            />
          )}
        </div>
        <div className={classes.modal_description}>
          <h1>{winType == "0" ? "Draw!" : "Congratulations!"}</h1>
          <p>{ winType == "0" ? "No One wins" : winner}</p>
        </div>
        <div className={classes.buttons_container}>
          <button
            type="button"
            className={classes.play_btn}
            // onClick={() => navigateHandler(path)}
            onClick={() => closeModalAndResetState()}
          >
            Play Again!
          </button>
          <button
            type="button"
            className={classes.back_btn}
            onClick={() => navigateHandler("/")}
          >
            Go Back!
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOverModal;
