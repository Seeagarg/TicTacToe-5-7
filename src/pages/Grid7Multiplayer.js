import React, { useState, useEffect } from "react";
import classes from "./Grid7.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setBoard, setIsHumanTurn, setWinner } from "../slices/grid7Slice";
import { closeModal, openModal } from "../slices/modalSlice";
import GameOverModal from "../components/GameOverModal";
import UserTurnAudio from "../components/UserTurnAudio";
import ComputerTurnAudio from "../components/ComputerTurnAudio";
import playerSlice, { resetPlayerState, toggleTurn } from "../slices/playerSlice";

const winningCombinations = [
  [0, 1, 2, 3, 4],
  [1, 2, 3, 4, 5],
  [2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11],
  [8, 9, 10, 11, 12],
  [9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18],
  [15, 16, 17, 18, 19],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
  [22, 23, 24, 25, 26],
  [23, 24, 25, 26, 27],
  [28, 29, 30, 31, 32],
  [29, 30, 31, 32, 33],
  [30, 31, 32, 33, 34],
  [35, 36, 37, 38, 39],
  [36, 37, 38, 39, 40],
  [37, 38, 39, 40, 41],
  [42, 43, 44, 45, 46],
  [43, 44, 45, 46, 47],
  [44, 45, 46, 47, 48],
  [0, 7, 14, 21, 28],
  [7, 14, 21, 28, 35],
  [14, 21, 28, 35, 42],
  [1, 8, 15, 22, 29],
  [8, 15, 22, 29, 36],
  [15, 22, 29, 36, 43],
  [2, 9, 16, 23, 30],
  [9, 16, 23, 30, 37],
  [16, 23, 30, 37, 44],
  [3, 10, 17, 24, 31],
  [10, 17, 24, 31, 38],
  [17, 24, 31, 38, 45],
  [4, 11, 18, 25, 32],
  [11, 18, 25, 32, 39],
  [18, 25, 32, 39, 46],
  [5, 12, 19, 26, 33],
  [12, 19, 26, 33, 40],
  [19, 26, 33, 40, 47],
  [6, 13, 20, 27, 34],
  [13, 20, 27, 34, 41],
  [20, 27, 34, 41, 48],
  [0, 8, 16, 24, 32],
  [8, 16, 24, 32, 40],
  [16, 24, 32, 40, 48],
  [1, 9, 17, 25, 33],
  [9, 17, 25, 33, 41],
  [2, 10, 18, 26, 34],
  [7, 15, 23, 31, 39],
  [15, 23, 31, 39, 47],
  [14, 22, 30, 38, 46],
  [6, 12, 18, 24, 30],
  [12, 18, 24, 30, 36],
  [18, 24, 30, 36, 42],
  [5, 11, 17, 23, 29],
  [11, 17, 23, 29, 35],
  [13, 19, 25, 31, 37],
  [19, 25, 31, 37, 43],
  [20, 26, 32, 38, 44],
  [4, 10, 16, 22, 28],
];

//calculate the winner
const calculateWinner = (board) => {
  for (let combination of winningCombinations) {
    const [a, b, c, d, e] = combination;
    if (
      board[a] &&
      board[b] &&
      board[c] &&
      board[d] &&
      board[e] &&
      board[a] === board[b] &&
      board[a] === board[c] &&
      board[a] === board[d] &&
      board[a] === board[e]
    ) {
      return board[b];
    }
  }

  return null;
};






const Grid7Multiplayer = () => {
  const dispatch = useDispatch();
  const [winType, setWinType] = useState("");
  const [xAudioPlay, setXAudioPlay] = useState(false);
  const [oAudioPlay,setOAudioPlay] = useState(false)
  const { board, isHumanTurn, winner } = useSelector(
    (state) => state.grid7Slice
  );

  const { modal } = useSelector((state) => state.modalSlice);
  const {player1,computer} = useSelector((state)=>state.playerSlice)

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

  //this is for computers move here computer will call getsmartcomputermove function to get some index where computer will put its value
  

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
  }, [board]);

  return (
    <div className={classes.container}>
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
                    : index === 26
                    ? classes.tile_twenty_seven
                    : index === 27
                    ? classes.tile_twenty_eight
                    : index === 28
                    ? classes.tile_twenty_nine
                    : index === 29
                    ? classes.tile_thirty
                    : index === 30
                    ? classes.tile_thirty_one
                    : index === 31
                    ? classes.tile_thirty_two
                    : index === 32
                    ? classes.tile_thirty_three
                    : index === 33
                    ? classes.tile_thirty_four
                    : index === 34
                    ? classes.tile_thirty_five
                    : index === 35
                    ? classes.tile_thirty_six
                    : index === 36
                    ? classes.tile_thirty_seven
                    : index === 37
                    ? classes.tile_thirty_eight
                    : index === 38
                    ? classes.tile_thirty_nine
                    : index === 39
                    ? classes.tile_forty
                    : index === 40
                    ? classes.tile_forty_one
                    : index === 41
                    ? classes.tile_forty_two
                    : index === 42
                    ? classes.tile_forty_three
                    : index === 43
                    ? classes.tile_forty_four
                    : index === 44
                    ? classes.tile_forty_five
                    : index === 45
                    ? classes.tile_forty_six
                    : index === 46
                    ? classes.tile_forty_seven
                    : index === 47
                    ? classes.tile_forty_eight
                    : index === 48
                    ? classes.tile_forty_nine
                    : index === 49
                    ? classes.tile_forty_fifty
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
                {cell}
              </div>
            ))}
            {/* {isHumanTurn ? null : computerMove()} */}
          </div>
        </div>
        <div className={classes.desc}>place 5 in a row</div>
      </div>
      {modal && (
        <GameOverModal
          winner={`${winner} wons the game!!`}
          winType={winType}
          closeModalHandler={closeModalHandler}
          path="/grid7"
        />
      )}
      {xAudioPlay ? <UserTurnAudio /> : ""}
      {oAudioPlay?<ComputerTurnAudio />:""}
    </div>
  );
};

export default Grid7Multiplayer;