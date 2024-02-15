import React, { useEffect, useState } from "react";
import classes from "./SinglePlayerEasyMode.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTurn } from "../slices/playerSlice";
import GameOverModal from "../components/GameOverModal";
import { closeModal, openModal } from "../slices/modalSlice";
import { setTiles, setTilesComputer } from "../slices/tilesSliceDynamic";
import { setGameOver } from "../slices/gameOverSlice";

const SinglePlayerMediumMode = () => {
  const dispatch = useDispatch();
  const { player1, computer } = useSelector((state) => state.playerSlice);
  const { tiles } = useSelector((state) => state.tilesSliceDynamic);
  const [winner, setWinner] = useState("");
  const [winType, setWinType] = useState("");
  const { modal } = useSelector((state) => state.modalSlice);
  const {gameOver}=useSelector(state=>state.gameOverSlice);

  const openModalHandler = () => {
    dispatch(openModal());
  };

  const closeModalHandler = () => {
    setWinType("");
    dispatch(closeModal());
  };

  const handleTileClick = (data) => {
    const filled = tiles.some(item=>item.index==data.index)
    if (player1 && !filled) {
      dispatch(setTiles({ index: data.index, value: "X" }));
      dispatch(toggleTurn());
    }
  };

  

  function doesObjectExistAtIndexWithValue(array, indexToCheck, valueToCheck) {
    const foundObject = array.find((obj) => obj.index === indexToCheck);

    return foundObject && foundObject.value === valueToCheck;
  }

  useEffect(() => {
    if (
      doesObjectExistAtIndexWithValue(tiles, 1, "X") &&
      doesObjectExistAtIndexWithValue(tiles, 2, "X") &&
      doesObjectExistAtIndexWithValue(tiles,3,"X")
    ) {
      dispatch(setGameOver());
      // setTimeout(() => {
        setWinner("Player X won the game!");
        openModalHandler();
      // }, 100);
    }
    if (
      doesObjectExistAtIndexWithValue(tiles, 1, "O") &&
      doesObjectExistAtIndexWithValue(tiles, 2, "O") &&
      doesObjectExistAtIndexWithValue(tiles,3 , "O")
    ) {
      dispatch(setGameOver());
      // setTimeout(() => {
        setWinner("Player O won the game!");
        openModalHandler();
      // }, 100);
    }
    if (
      doesObjectExistAtIndexWithValue(tiles, 4, "X") &&
      doesObjectExistAtIndexWithValue(tiles, 5, "X") &&
      doesObjectExistAtIndexWithValue(tiles, 6 ,"X")
    ) {
      dispatch(setGameOver());
      // setTimeout(() => {
        setWinner("Player X won the game!");
        openModalHandler();
      // }, 100);
    }
    if (
      doesObjectExistAtIndexWithValue(tiles, 4, "O") &&
      doesObjectExistAtIndexWithValue(tiles, 5, "O") &&
      doesObjectExistAtIndexWithValue(tiles, 6 ,"O")
    ) {
      dispatch(setGameOver());
      // setTimeout(() => {
        setWinner("Player O won the game!");
        openModalHandler();
      // }, 100);
    }
    if (
      doesObjectExistAtIndexWithValue(tiles, 7, "X") &&
      doesObjectExistAtIndexWithValue(tiles, 8, "X") &&
      doesObjectExistAtIndexWithValue(tiles, 9 ,"X")
    ) {
      dispatch(setGameOver());
      // setTimeout(() => {
        setWinner("Player X won the game!");
        openModalHandler();
      // }, 100);
    }
    if (
      doesObjectExistAtIndexWithValue(tiles, 7, "O") &&
      doesObjectExistAtIndexWithValue(tiles, 8, "O") &&
      doesObjectExistAtIndexWithValue(tiles, 9 ,"O")
    ) {
      dispatch(setGameOver());
      // setTimeout(() => {
        setWinner("Player O won the game!");
        openModalHandler();
      // }, 100);
    }
    if (
      doesObjectExistAtIndexWithValue(tiles, 1, "X") &&
      doesObjectExistAtIndexWithValue(tiles, 4, "X") &&
      doesObjectExistAtIndexWithValue(tiles, 7 ,"X")
    ) {
      dispatch(setGameOver());
      // setTimeout(() => {
        setWinner("Player X won the game!");
        openModalHandler();
      // }, 100);
    }
    if (
      doesObjectExistAtIndexWithValue(tiles, 1, "O") &&
      doesObjectExistAtIndexWithValue(tiles, 4, "O") &&
      doesObjectExistAtIndexWithValue(tiles, 7 ,"O")
    ) {
      dispatch(setGameOver());
      // setTimeout(() => {
        setWinner("Player O won the game!");
        openModalHandler();
      // }, 100);
    }
    if (
      doesObjectExistAtIndexWithValue(tiles, 2, "X") &&
      doesObjectExistAtIndexWithValue(tiles, 5, "X") &&
      doesObjectExistAtIndexWithValue(tiles, 8 ,"X")
    ) {
      dispatch(setGameOver());
      // setTimeout(() => {
        setWinner("Player X won the game!");
        openModalHandler();
      // }, 100);
    }
    if (
      doesObjectExistAtIndexWithValue(tiles, 2, "O") &&
      doesObjectExistAtIndexWithValue(tiles, 5, "O") &&
      doesObjectExistAtIndexWithValue(tiles, 8 ,"O")
    ) {
      dispatch(setGameOver());
      // setTimeout(() => {
        setWinner("Player O won the game!");
        openModalHandler();
      // }, 100);
    }
    if (
      doesObjectExistAtIndexWithValue(tiles, 3, "X") &&
      doesObjectExistAtIndexWithValue(tiles, 6, "X") &&
      doesObjectExistAtIndexWithValue(tiles, 9 ,"X")
    ) {
      dispatch(setGameOver());
      // setTimeout(() => {
        setWinner("Player X won the game!");
        openModalHandler();
      // }, 100);
    }
    if (
      doesObjectExistAtIndexWithValue(tiles, 3, "O") &&
      doesObjectExistAtIndexWithValue(tiles, 6, "O") &&
      doesObjectExistAtIndexWithValue(tiles, 9 ,"O")
    ) {
      dispatch(setGameOver());
      // setTimeout(() => {
        setWinner("Player O won the game!");
        openModalHandler();
      // }, 100);
    }
    if (
      doesObjectExistAtIndexWithValue(tiles, 1, "X") &&
      doesObjectExistAtIndexWithValue(tiles, 5, "X") &&
      doesObjectExistAtIndexWithValue(tiles, 9 ,"X")
    ) {
      dispatch(setGameOver());
      // setTimeout(() => {
        setWinner("Player X won the game!");
        openModalHandler();
      // }, 100);
    }
    if (
      doesObjectExistAtIndexWithValue(tiles, 1, "O") &&
      doesObjectExistAtIndexWithValue(tiles, 5, "O") &&
      doesObjectExistAtIndexWithValue(tiles, 9 ,"O")
    ) {
      dispatch(setGameOver());
      // setTimeout(() => {
        setWinner("Player O won the game!");
        openModalHandler();
      // }, 100);
    }
    if (
      doesObjectExistAtIndexWithValue(tiles, 3, "X") &&
      doesObjectExistAtIndexWithValue(tiles, 5, "X") &&
      doesObjectExistAtIndexWithValue(tiles, 7 ,"X")
    ) {
      dispatch(setGameOver());
      // setTimeout(() => {
        setWinner("Player X won the game!");
        openModalHandler();
      // }, 100);
    }
    if (
      doesObjectExistAtIndexWithValue(tiles, 3, "O") &&
      doesObjectExistAtIndexWithValue(tiles, 5, "O") &&
      doesObjectExistAtIndexWithValue(tiles, 7 ,"O")
    ) {
      dispatch(setGameOver());
      // setTimeout(() => {
        setWinner("Player O won the game!");
        openModalHandler();
      // }, 100);
    }
  }, [tiles]);

  useEffect(()=>{
    const over = localStorage.getItem("gameOver")
    if (tiles?.length === 9 && !over ) {
      setTimeout(() => {
        dispatch(setGameOver());
        
          setWinner("It's a Draw !");
          setWinType("0");
        
        openModalHandler();
        
    }, 1000);
  }
  },[tiles,gameOver])


  useEffect(() => {
    const over = localStorage.getItem("gameOver")
    if (computer && tiles?.length !== 9 && !over) {
      setTimeout(() => {
        dispatch(setTilesComputer());
        dispatch(toggleTurn());
      }, 1000);
    }
  }, [computer,gameOver]);


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
        {Array.isArray(tiles)
          ? tiles.map((tile) => {
              console.log(tile, "t");
              return (
                <h1
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
          path="/single-player/game-mode-medium"
        />
      )}
    </div>
  );
};

export default SinglePlayerMediumMode;
