import React, { useEffect, useState } from "react";
import classes from "./SinglePlayerEasyMode.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTurn } from "../slices/playerSlice";
import GameOverModal from "../components/GameOverModal";
import { closeModal, openModal } from "../slices/modalSlice";
import {
  setTilesHardMode,
  setTilesHardModeComputer,
} from "../slices/tilesSliceHard";
import { setGameOver } from "../slices/gameOverSlice";
import UserTurnAudio from "../components/UserTurnAudio";
import ComputerTurnAudio from "../components/ComputerTurnAudio";

const SinglePlayerHardMode = () => {
  const dispatch = useDispatch();
  const { player1, computer } = useSelector((state) => state.playerSlice);
  const { tilesHardMode } = useSelector((state) => state.tilesSliceHardMode);
  const [winner, setWinner] = useState("");
  const [winType, setWinType] = useState("");
  const { modal } = useSelector((state) => state.modalSlice);
  const { gameOver } = useSelector((state) => state.gameOverSlice);
  const [xAudioPlay, setXAudioPlay] = useState(false);
  const [oAudioPlay,setOAudioPlay] = useState(false)

  const openModalHandler = () => {
    dispatch(openModal());
  };

  const closeModalHandler = () => {
    setWinType("");
    dispatch(closeModal());
  };

  const handleTileClick = (data) => {
    setXAudioPlay(true);
    setOAudioPlay(false)
    const filled = tilesHardMode.some((item) => item.index == data.index);
    if (player1 && !filled) {
      dispatch(setTilesHardMode({ index: data.index, value: "X" }));
      dispatch(toggleTurn());
    }
  };

  function doesObjectExistAtIndexWithValue(array, indexToCheck, valueToCheck) {
    const foundObject = array.find((obj) => obj.index === indexToCheck);

    return foundObject && foundObject.value === valueToCheck;
  }

  useEffect(() => {
    if (
      doesObjectExistAtIndexWithValue(tilesHardMode, 1, "X") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 2, "X") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 3, "X")
    ) {
      dispatch(setGameOver());
      setWinner("Player X won the game!");
      openModalHandler();
    }
    if (
      doesObjectExistAtIndexWithValue(tilesHardMode, 1, "O") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 2, "O") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 3, "O")
    ) {
      dispatch(setGameOver());

      setWinner("Player O won the game!");

      openModalHandler();
    }
    if (
      doesObjectExistAtIndexWithValue(tilesHardMode, 4, "X") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 5, "X") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 6, "X")
    ) {
      dispatch(setGameOver());

      setWinner("Player X won the game!");

      openModalHandler();
    }
    if (
      doesObjectExistAtIndexWithValue(tilesHardMode, 4, "O") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 5, "O") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 6, "O")
    ) {
      dispatch(setGameOver());

      setWinner("Player O won the game!");

      openModalHandler();
    }
    if (
      doesObjectExistAtIndexWithValue(tilesHardMode, 7, "X") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 8, "X") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 9, "X")
    ) {
      dispatch(setGameOver());

      setWinner("Player X won the game!");

      openModalHandler();
    }
    if (
      doesObjectExistAtIndexWithValue(tilesHardMode, 7, "O") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 8, "O") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 9, "O")
    ) {
      dispatch(setGameOver());

      setWinner("Player O won the game!");

      openModalHandler();
    }
    if (
      doesObjectExistAtIndexWithValue(tilesHardMode, 1, "X") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 4, "X") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 7, "X")
    ) {
      dispatch(setGameOver());

      setWinner("Player X won the game!");
      openModalHandler();
    }
    if (
      doesObjectExistAtIndexWithValue(tilesHardMode, 1, "O") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 4, "O") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 7, "O")
    ) {
      dispatch(setGameOver());

      setWinner("Player O won the game!");

      openModalHandler();
    }
    if (
      doesObjectExistAtIndexWithValue(tilesHardMode, 2, "X") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 5, "X") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 8, "X")
    ) {
      dispatch(setGameOver());

      setWinner("Player X won the game!");

      openModalHandler();
    }
    if (
      doesObjectExistAtIndexWithValue(tilesHardMode, 2, "O") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 5, "O") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 8, "O")
    ) {
      dispatch(setGameOver());

      setWinner("Player O won the game!");

      openModalHandler();
    }
    if (
      doesObjectExistAtIndexWithValue(tilesHardMode, 3, "X") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 6, "X") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 9, "X")
    ) {
      dispatch(setGameOver());

      setWinner("Player X won the game!");

      openModalHandler();
    }
    if (
      doesObjectExistAtIndexWithValue(tilesHardMode, 3, "O") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 6, "O") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 9, "O")
    ) {
      dispatch(setGameOver());

      setWinner("Player O won the game!");

      openModalHandler();
    }
    if (
      doesObjectExistAtIndexWithValue(tilesHardMode, 1, "X") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 5, "X") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 9, "X")
    ) {
      dispatch(setGameOver());

      setWinner("Player X won the game!");

      openModalHandler();
    }
    if (
      doesObjectExistAtIndexWithValue(tilesHardMode, 1, "O") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 5, "O") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 9, "O")
    ) {
      dispatch(setGameOver());

      setWinner("Player O won the game!");

      openModalHandler();
    }
    if (
      doesObjectExistAtIndexWithValue(tilesHardMode, 3, "X") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 5, "X") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 7, "X")
    ) {
      dispatch(setGameOver());

      setWinner("Player X won the game!");

      openModalHandler();
    }
    if (
      doesObjectExistAtIndexWithValue(tilesHardMode, 3, "O") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 5, "O") &&
      doesObjectExistAtIndexWithValue(tilesHardMode, 7, "O")
    ) {
      dispatch(setGameOver());

      setWinner("Player O won the game!");

      openModalHandler();
    }
  }, [tilesHardMode]);

  useEffect(() => {
    const over = localStorage.getItem("gameOver");

    if (tilesHardMode?.length === 9 && !over) {
      setTimeout(() => {
        dispatch(setGameOver());

        setWinner("It's a Draw !");
        setWinType("0");

        openModalHandler();
      }, 1000);
    }
  }, [tilesHardMode, gameOver]);

  useEffect(() => {
    const over = localStorage.getItem("gameOver");

    if (computer && tilesHardMode?.length !== 9 && !over) {
      setTimeout(() => {
        setXAudioPlay(false);
    setOAudioPlay(true)
        dispatch(setTilesHardModeComputer());
        dispatch(toggleTurn());
      }, 600);
    }
  }, [computer, gameOver]);

  const renderTiles = () => {
    const tilesArray = new Array(9).fill(null);

    return tilesArray.map((_, index) => (
      <div
        key={index}
        className={`${
          index + 1 === 1
            ? classes.tile_one
            : index + 1 === 2
            ? classes.tile_two
            : index + 1 === 3
            ? classes.tile_three
            : index + 1 === 4
            ? classes.tile_four
            : index + 1 === 5
            ? classes.tile_five
            : index + 1 === 6
            ? classes.tile_six
            : index + 1 === 7
            ? classes.tile_seven
            : index + 1 === 8
            ? classes.tile_eight
            : classes.tile_nine
        }`}
        onClick={() => handleTileClick({ index: index + 1 })}
      >
        {Array.isArray(tilesHardMode)
          ? tilesHardMode.map((tile, i) => {
              return (
                <h1
                  key={i}
                  style={
                    tile?.value === "X"
                      ? { color: "#e8d615", fontSize: "7rem" }
                      : {
                          color: "white",
                          fontSize: "7rem",
                        }
                  }
                >
                  {tile?.index === index + 1 ? tile?.value : null}
                </h1>
              );
            })
          : null}
      </div>
    ));
  };

  return (
    <div className={classes.container}>
       {xAudioPlay ? <UserTurnAudio /> : ""}
      {oAudioPlay?<ComputerTurnAudio />:""}
      <div className={classes.sub_container}>
        <div className={classes.game_title}>
          <h1 className={classes.title}>Tic-Tac-Toe</h1>
        </div>

        <div className={classes.player_turn_indicator}>
          <h1>
            {player1
              ? "Player X's Turn "
              : computer
              ? "Computer O's Turn"
              : null}
          </h1>
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

        <div className={classes.grid_container}>
          <img
            src="/assets/images/background-grid.jpg"
            className={classes.bg_img}
          />
          <div className={classes.grid}>{renderTiles()}</div>
        </div>
      </div>
      {modal && (
        <GameOverModal
          winner={winner}
          winType={winType}
          closeModalHandler={closeModalHandler}
          path="/single-player/game-mode-hard"
        />
      )}
    </div>
  );
};

export default SinglePlayerHardMode;
