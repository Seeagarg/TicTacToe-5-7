import React, { useState, useEffect } from "react";
import classes from "./grid4.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setBoard, setIsHumanTurn, setWinner } from "../slices/tiles5Slice";
import { closeModal, openModal } from "../slices/modalSlice";
import GameOverModal from "../components/GameOverModal";
import UserTurnAudio from "../components/UserTurnAudio";
import ComputerTurnAudio from "../components/ComputerTurnAudio";
import playerSlice, { resetPlayerState, toggleTurn } from "../slices/playerSlice";

const winningCombinations = [
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [6, 7, 8, 9],
  [10, 11, 12, 13],
  [11, 12, 13, 14],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [20, 21, 22, 23],
  [21, 22, 23, 24],
  [0, 5, 10, 15],
  [5, 10, 15, 20],
  [6, 11, 16, 21],
  [1, 6, 11, 16],
  [7, 12, 17, 22],
  [8, 13, 18, 23],
  [9, 14, 19, 24],
  [4, 9, 14, 19],
  [3, 8, 13, 18],
  [2, 7, 12, 17],
  [0, 6, 12, 18],
  [6, 12, 18, 24],
  [8, 12, 16, 20],
  [4, 8, 12, 16],
  [1, 7, 13, 19],
  [5, 11, 17, 23],
  [3, 7, 11, 15],
  [9, 13, 17, 21],
];

//calculate the winner
const calculateWinner = (board) => {
  for (let combination of winningCombinations) {
    const [a, b, c, d] = combination;
    if (
      board[a] &&
      board[b] &&
      board[c] &&
      board[d] &&
      board[a] == board[b] &&
      board[a] == board[c] &&
      board[a] == board[d]
    ) {
      return board[b];
    }
  }
  return null;
};

//to check if some value exist or not on a particular index
function doesObjectExistAtIndexWithValue(array, indexToCheck, valueToCheck) {
  const foundObject = array[indexToCheck] !== "";
  return foundObject && array[indexToCheck] === valueToCheck;
}


const Grid5Multiplayer = () => {
  const dispatch = useDispatch();
  const [winType, setWinType] = useState("");
  const [audioPlay, setAudioPlay] = useState(false);
  const [xAudioPlay, setXAudioPlay] = useState(false);
  const [oAudioPlay,setOAudioPlay] = useState(false)
  const { board, isHumanTurn, winner } = useSelector(
    (state) => state.tiles5Slice
  );
  const {player1,computer} = useSelector((state)=>state.playerSlice)

  const { modal } = useSelector((state) => state.modalSlice);

  //this function is called when click on one tile with index passed as argument
  //here we can change the array and set that array into the redux
  const handleCellClick = (index) => {
    if (board[index] === "" && player1) {
      const newBoard = [...board];
      newBoard[index] = "X";
      setXAudioPlay(true);
    setOAudioPlay(false)
      dispatch(setBoard(newBoard));
      dispatch(toggleTurn())
    }
    if (board[index] === "" && computer) {
      const newBoard = [...board];
      newBoard[index] = "O";
      setXAudioPlay(false);
    setOAudioPlay(true)
      dispatch(setBoard(newBoard));
      dispatch(toggleTurn())
    }
  };


  //this closes the modal which opened when someone wins or game over
  const closeModalHandler = () => {
    setWinType("");
    dispatch(closeModal());
  };

  //here winner is checked and set into the redux state
  useEffect(() => {
    const checkWinner = calculateWinner(board);
    if (checkWinner) {
      dispatch(setWinner(checkWinner));
    }
  }, [handleCellClick]);

  if (winner) {
    dispatch(openModal());
  }

  //here every box is checked if filled then there is draw condition
  useEffect(() => {
    if (board.every((item) => item != "")) {
      setWinType("0");
      dispatch(openModal());
    }
  });

  return (
    <div className={classes.container}>
       {xAudioPlay ? <UserTurnAudio /> : ""}
      {oAudioPlay?<ComputerTurnAudio />:""}
      <div className={classes.sub_container}>
        <div className={classes.game_title}>
          <h1 className={classes.title}>Tic-Tac-Toe</h1>
        </div>

        <div className={classes.player_turn_indicator}>
          <h1>{player1 ? "Player X's Turn " : "Computer O's Turn"}</h1>
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
          <div className={classes.grid}>
            {board.map((cell, index) => (
              <div
                key={index}
                className={`
                ${
                  index === 0
                    ? classes.tile_one
                    : index === 1
                    ? classes.tile_two
                    : index === 2
                    ? classes.tile_three
                    : index === 3
                    ? classes.tile_four
                    : index === 4
                    ? classes.tile_five
                    : index === 5
                    ? classes.tile_six
                    : index === 6
                    ? classes.tile_seven
                    : index === 7
                    ? classes.tile_eight
                    : index === 8
                    ? classes.tile_nine
                    : index === 9
                    ? classes.tile_ten
                    : index === 10
                    ? classes.tile_eleven
                    : index === 11
                    ? classes.tile_twelve
                    : index === 12
                    ? classes.tile_thirteen
                    : index === 13
                    ? classes.tile_fourteen
                    : index === 14
                    ? classes.tile_fifteen
                    : index === 15
                    ? classes.tile_sixteen
                    : index === 16
                    ? classes.tile_seventeen
                    : index === 17
                    ? classes.tile_eighteen
                    : index === 18
                    ? classes.tile_nineteen
                    : index === 19
                    ? classes.tile_twenty
                    : index === 20
                    ? classes.tile_twenty_one
                    : index === 21
                    ? classes.tile_twenty_two
                    : index === 22
                    ? classes.tile_twenty_three
                    : index === 23
                    ? classes.tile_twenty_four
                    : index === 24
                    ? classes.tile_twenty_five
                    : index === 25
                    ? classes.tile_twenty_six
                    : null
                }
              `}
                style={
                  cell === "X"
                    ? { color: "#e8d615" }
                    : {
                        color: "white",
                      }
                }
                onClick={() => handleCellClick(index)}
              >
                <div>{cell}</div>
              </div>
            ))}
            {/* {isHumanTurn ? null : computerMove()} */}
          </div>
        </div>
        <div className={classes.desc}>place 4 in a row</div>
      </div>
      {modal && (
        <GameOverModal
          winner={`${winner} wons the game!!`}
          winType={winType}
          closeModalHandler={closeModalHandler}
          path="/grid5"
        />
      )}
    </div>
  );
};

export default Grid5Multiplayer;
