import React, { useState, useEffect } from "react";
import classes from "./Grid7.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setBoard, setIsHumanTurn, setWinner } from "../slices/grid7Slice";
import { closeModal, openModal } from "../slices/modalSlice";
import GameOverModal from "../components/GameOverModal";
import UserTurnAudio from "../components/UserTurnAudio";
import ComputerTurnAudio from "../components/ComputerTurnAudio";

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

//to check if some value exist or not on a particular index
function doesObjectExistAtIndexWithValue(array, indexToCheck, valueToCheck) {
  const foundObject = array[indexToCheck] !== "";
  return foundObject && array[indexToCheck] === valueToCheck;
}

//to run computer smartly
const getSmartComputerMove = (board) => {
  //first check the inner 2 tiles and block the third tile in all rows and cols and diagonals
  if (
    doesObjectExistAtIndexWithValue(board, 2, "X") &&
    doesObjectExistAtIndexWithValue(board, 3, "X") &&
    doesObjectExistAtIndexWithValue(board, 1, "X") &&
    !doesObjectExistAtIndexWithValue(board, 4, "O") &&
    !doesObjectExistAtIndexWithValue(board, 4, "X")
  ) {
    return 4;
  }

  if (
    doesObjectExistAtIndexWithValue(board, 1, "X") &&
    doesObjectExistAtIndexWithValue(board, 2, "X") &&
    doesObjectExistAtIndexWithValue(board, 4, "X") &&
    !doesObjectExistAtIndexWithValue(board, 3, "O") &&
    !doesObjectExistAtIndexWithValue(board, 3, "X")
  ) {
    return 3;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 3, "X") &&
    doesObjectExistAtIndexWithValue(board, 4, "X") &&
    doesObjectExistAtIndexWithValue(board, 5, "X") &&
    !doesObjectExistAtIndexWithValue(board, 2, "O") &&
    !doesObjectExistAtIndexWithValue(board, 2, "X")
  ) {
    return 2;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 8, "X") &&
    doesObjectExistAtIndexWithValue(board, 9, "X") &&
    doesObjectExistAtIndexWithValue(board, 10, "X") &&
    !doesObjectExistAtIndexWithValue(board, 11, "O") &&
    !doesObjectExistAtIndexWithValue(board, 11, "X")
  ) {
    return 11;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 10, "X") &&
    doesObjectExistAtIndexWithValue(board, 11, "X") &&
    doesObjectExistAtIndexWithValue(board, 12, "X") &&
    !doesObjectExistAtIndexWithValue(board, 9, "O") &&
    !doesObjectExistAtIndexWithValue(board, 9, "X")
  ) {
    return 9;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 15, "X") &&
    doesObjectExistAtIndexWithValue(board, 16, "X") &&
    doesObjectExistAtIndexWithValue(board, 17, "X") &&
    !doesObjectExistAtIndexWithValue(board, 18, "O") &&
    !doesObjectExistAtIndexWithValue(board, 18, "X")
  ) {
    return 18;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 18, "X") &&
    doesObjectExistAtIndexWithValue(board, 19, "X") &&
    doesObjectExistAtIndexWithValue(board, 17, "X") &&
    !doesObjectExistAtIndexWithValue(board, 16, "O") &&
    !doesObjectExistAtIndexWithValue(board, 16, "X")
  ) {
    return 16;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 22, "X") &&
    doesObjectExistAtIndexWithValue(board, 23, "X") &&
    doesObjectExistAtIndexWithValue(board, 24, "X") &&
    !doesObjectExistAtIndexWithValue(board, 25, "O") &&
    !doesObjectExistAtIndexWithValue(board, 25, "X")
  ) {
    return 11;
  }

  if (
    doesObjectExistAtIndexWithValue(board, 24, "X") &&
    doesObjectExistAtIndexWithValue(board, 25, "X") &&
    doesObjectExistAtIndexWithValue(board, 26, "X") &&
    !doesObjectExistAtIndexWithValue(board, 23, "O") &&
    !doesObjectExistAtIndexWithValue(board, 23, "X")
  ) {
    return 23;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 29, "X") &&
    doesObjectExistAtIndexWithValue(board, 30, "X") &&
    doesObjectExistAtIndexWithValue(board, 31, "X") &&
    !doesObjectExistAtIndexWithValue(board, 32, "O") &&
    !doesObjectExistAtIndexWithValue(board, 32, "X")
  ) {
    return 32;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 36, "X") &&
    doesObjectExistAtIndexWithValue(board, 37, "X") &&
    doesObjectExistAtIndexWithValue(board, 38, "X") &&
    !doesObjectExistAtIndexWithValue(board, 39, "O") &&
    !doesObjectExistAtIndexWithValue(board, 39, "X")
  ) {
    return 39;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 38, "X") &&
    doesObjectExistAtIndexWithValue(board, 39, "X") &&
    doesObjectExistAtIndexWithValue(board, 40, "X") &&
    !doesObjectExistAtIndexWithValue(board, 37, "O") &&
    !doesObjectExistAtIndexWithValue(board, 37, "X")
  ) {
    return 37;
  }

  if (
    doesObjectExistAtIndexWithValue(board, 43, "X") &&
    doesObjectExistAtIndexWithValue(board, 44, "X") &&
    doesObjectExistAtIndexWithValue(board, 45, "X") &&
    !doesObjectExistAtIndexWithValue(board, 46, "O") &&
    !doesObjectExistAtIndexWithValue(board, 46, "X")
  ) {
    return 46;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 45, "X") &&
    doesObjectExistAtIndexWithValue(board, 46, "X") &&
    doesObjectExistAtIndexWithValue(board, 47, "X") &&
    !doesObjectExistAtIndexWithValue(board, 44, "O") &&
    !doesObjectExistAtIndexWithValue(board, 44, "X")
  ) {
    return 11;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 7, "X") &&
    doesObjectExistAtIndexWithValue(board, 14, "X") &&
    doesObjectExistAtIndexWithValue(board, 21, "X") &&
    !doesObjectExistAtIndexWithValue(board, 28, "O") &&
    !doesObjectExistAtIndexWithValue(board, 28, "X")
  ) {
    return 28;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 21, "X") &&
    doesObjectExistAtIndexWithValue(board, 28, "X") &&
    doesObjectExistAtIndexWithValue(board, 35, "X") &&
    !doesObjectExistAtIndexWithValue(board, 14, "O") &&
    !doesObjectExistAtIndexWithValue(board, 14, "X")
  ) {
    return 14;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 8, "X") &&
    doesObjectExistAtIndexWithValue(board, 15, "X") &&
    doesObjectExistAtIndexWithValue(board, 22, "X") &&
    !doesObjectExistAtIndexWithValue(board, 29, "O") &&
    !doesObjectExistAtIndexWithValue(board, 29, "X")
  ) {
    return 29;
  }

  if (
    doesObjectExistAtIndexWithValue(board, 22, "X") &&
    doesObjectExistAtIndexWithValue(board, 29, "X") &&
    doesObjectExistAtIndexWithValue(board, 36, "X") &&
    !doesObjectExistAtIndexWithValue(board, 15, "O") &&
    !doesObjectExistAtIndexWithValue(board, 15, "X")
  ) {
    return 15;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 9, "X") &&
    doesObjectExistAtIndexWithValue(board, 16, "X") &&
    doesObjectExistAtIndexWithValue(board, 23, "X") &&
    !doesObjectExistAtIndexWithValue(board, 30, "O") &&
    !doesObjectExistAtIndexWithValue(board, 30, "X")
  ) {
    return 30;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 23, "X") &&
    doesObjectExistAtIndexWithValue(board, 30, "X") &&
    doesObjectExistAtIndexWithValue(board, 37, "X") &&
    !doesObjectExistAtIndexWithValue(board, 16, "O") &&
    !doesObjectExistAtIndexWithValue(board, 16, "X")
  ) {
    return 16;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 10, "X") &&
    doesObjectExistAtIndexWithValue(board, 17, "X") &&
    doesObjectExistAtIndexWithValue(board, 24, "X") &&
    !doesObjectExistAtIndexWithValue(board, 31, "O") &&
    !doesObjectExistAtIndexWithValue(board, 31, "X")
  ) {
    return 31;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 24, "X") &&
    doesObjectExistAtIndexWithValue(board, 31, "X") &&
    doesObjectExistAtIndexWithValue(board, 38, "X") &&
    !doesObjectExistAtIndexWithValue(board, 17, "O") &&
    !doesObjectExistAtIndexWithValue(board, 17, "X")
  ) {
    return 17;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 11, "X") &&
    doesObjectExistAtIndexWithValue(board, 18, "X") &&
    doesObjectExistAtIndexWithValue(board, 25, "X") &&
    !doesObjectExistAtIndexWithValue(board, 32, "O") &&
    !doesObjectExistAtIndexWithValue(board, 32, "X")
  ) {
    return 32;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 25, "X") &&
    doesObjectExistAtIndexWithValue(board, 32, "X") &&
    doesObjectExistAtIndexWithValue(board, 39, "X") &&
    !doesObjectExistAtIndexWithValue(board, 18, "O") &&
    !doesObjectExistAtIndexWithValue(board, 18, "X")
  ) {
    return 18;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 12, "X") &&
    doesObjectExistAtIndexWithValue(board, 19, "X") &&
    doesObjectExistAtIndexWithValue(board, 26, "X") &&
    !doesObjectExistAtIndexWithValue(board, 33, "O") &&
    !doesObjectExistAtIndexWithValue(board, 33, "X")
  ) {
    return 33;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 26, "X") &&
    doesObjectExistAtIndexWithValue(board, 33, "X") &&
    doesObjectExistAtIndexWithValue(board, 40, "X") &&
    !doesObjectExistAtIndexWithValue(board, 19, "O") &&
    !doesObjectExistAtIndexWithValue(board, 19, "X")
  ) {
    return 19;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 13, "X") &&
    doesObjectExistAtIndexWithValue(board, 20, "X") &&
    doesObjectExistAtIndexWithValue(board, 27, "X") &&
    !doesObjectExistAtIndexWithValue(board, 34, "O") &&
    !doesObjectExistAtIndexWithValue(board, 34, "X")
  ) {
    return 34;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 27, "X") &&
    doesObjectExistAtIndexWithValue(board, 34, "X") &&
    doesObjectExistAtIndexWithValue(board, 41, "X") &&
    !doesObjectExistAtIndexWithValue(board, 20, "O") &&
    !doesObjectExistAtIndexWithValue(board, 20, "X")
  ) {
    return 20;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 8, "X") &&
    doesObjectExistAtIndexWithValue(board, 16, "X") &&
    doesObjectExistAtIndexWithValue(board, 24, "X") &&
    !doesObjectExistAtIndexWithValue(board, 32, "O") &&
    !doesObjectExistAtIndexWithValue(board, 32, "X")
  ) {
    return 32;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 24, "X") &&
    doesObjectExistAtIndexWithValue(board, 32, "X") &&
    doesObjectExistAtIndexWithValue(board, 40, "X") &&
    !doesObjectExistAtIndexWithValue(board, 16, "O") &&
    !doesObjectExistAtIndexWithValue(board, 16, "X")
  ) {
    return 16;
  }

  if (
    doesObjectExistAtIndexWithValue(board, 12, "X") &&
    doesObjectExistAtIndexWithValue(board, 18, "X") &&
    doesObjectExistAtIndexWithValue(board, 24, "X") &&
    !doesObjectExistAtIndexWithValue(board, 30, "O") &&
    !doesObjectExistAtIndexWithValue(board, 30, "X")
  ) {
    return 30;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 24, "X") &&
    doesObjectExistAtIndexWithValue(board, 30, "X") &&
    doesObjectExistAtIndexWithValue(board, 36, "X") &&
    !doesObjectExistAtIndexWithValue(board, 18, "O") &&
    !doesObjectExistAtIndexWithValue(board, 18, "X")
  ) {
    return 18;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 11, "X") &&
    doesObjectExistAtIndexWithValue(board, 17, "X") &&
    doesObjectExistAtIndexWithValue(board, 23, "X") &&
    !doesObjectExistAtIndexWithValue(board, 29, "O") &&
    !doesObjectExistAtIndexWithValue(board, 29, "X")
  ) {
    return 29;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 17, "X") &&
    doesObjectExistAtIndexWithValue(board, 23, "X") &&
    doesObjectExistAtIndexWithValue(board, 29, "X") &&
    !doesObjectExistAtIndexWithValue(board, 11, "O") &&
    !doesObjectExistAtIndexWithValue(board, 11, "X")
  ) {
    return 11;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 19, "X") &&
    doesObjectExistAtIndexWithValue(board, 25, "X") &&
    doesObjectExistAtIndexWithValue(board, 31, "X") &&
    !doesObjectExistAtIndexWithValue(board, 37, "O") &&
    !doesObjectExistAtIndexWithValue(board, 37, "X")
  ) {
    return 37;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 25, "X") &&
    doesObjectExistAtIndexWithValue(board, 31, "X") &&
    doesObjectExistAtIndexWithValue(board, 37, "X") &&
    !doesObjectExistAtIndexWithValue(board, 19, "O") &&
    !doesObjectExistAtIndexWithValue(board, 19, "X")
  ) {
    return 19;
  }

  if (
    doesObjectExistAtIndexWithValue(board, 9, "X") &&
    doesObjectExistAtIndexWithValue(board, 17, "X") &&
    doesObjectExistAtIndexWithValue(board, 25, "X") &&
    !doesObjectExistAtIndexWithValue(board, 33, "O") &&
    !doesObjectExistAtIndexWithValue(board, 33, "X")
  ) {
    return 33;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 17, "X") &&
    doesObjectExistAtIndexWithValue(board, 25, "X") &&
    doesObjectExistAtIndexWithValue(board, 33, "X") &&
    !doesObjectExistAtIndexWithValue(board, 9, "O") &&
    !doesObjectExistAtIndexWithValue(board, 9, "X")
  ) {
    return 9;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 15, "X") &&
    doesObjectExistAtIndexWithValue(board, 23, "X") &&
    doesObjectExistAtIndexWithValue(board, 31, "X") &&
    !doesObjectExistAtIndexWithValue(board, 39, "O") &&
    !doesObjectExistAtIndexWithValue(board, 39, "X")
  ) {
    return 39;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 23, "X") &&
    doesObjectExistAtIndexWithValue(board, 31, "X") &&
    doesObjectExistAtIndexWithValue(board, 39, "X") &&
    !doesObjectExistAtIndexWithValue(board, 15, "O") &&
    !doesObjectExistAtIndexWithValue(board, 15, "X")
  ) {
    return 15;
  }

  //computer checks by putting "O" and "X" on every index whether there is some winning condition or not
  for (let i = 0; i < 49; i++) {
    if (board[i] === "") {
      const newBoard = [...board];
      newBoard[i] = "O";
      if (calculateWinner(newBoard)) {
        return i;
      }
      newBoard[i] = "";
    }
  }

  for (let i = 0; i < 49; i++) {
    if (board[i] === "") {
      const newBoard = [...board];
      newBoard[i] = "X";
      if (calculateWinner(newBoard)) {
        return i;
      }
      newBoard[i] = "";
    }
  }

  //this generates random index where computer will run its turn and put "O"
  function randomIndex() {
    const randomNumber = Math.floor(Math.random() * 49);
    const check = board.every((item) => item !== "");
    if (board[randomNumber] == "") {
      return randomNumber;
    } else if (check) {
      return;
    } else {
      //if generated random index has some value there than again call the function
      return randomIndex();
    }
  }
  return randomIndex();
};

const Grid7 = () => {
  const dispatch = useDispatch();
  const [winType, setWinType] = useState("");
  const [audioPlay, setAudioPlay] = useState(false);
  const { board, isHumanTurn, winner } = useSelector(
    (state) => state.grid7Slice
  );

  const { modal } = useSelector((state) => state.modalSlice);

  //this function is called when click on one tile with index passed as argument
  //here we can change the array and set that array into the redux
  const handleCellClick = (index) => {
    setAudioPlay(true);
    if (board[index] === "" && isHumanTurn && winner == null) {
      const newBoard = [...board];
      newBoard[index] = "X";
      dispatch(setBoard(newBoard));
      dispatch(setIsHumanTurn(false));
    }
  };

  //this is for computers move here computer will call getsmartcomputermove function to get some index where computer will put its value
  const computerMove = () => {
    const checkWinner = calculateWinner(board);
    if (!checkWinner) {
      const moveIndex = getSmartComputerMove(board);
      const newBoard = [...board];
      newBoard[moveIndex] = "O";
      setTimeout(() => {
        setAudioPlay(false);
        dispatch(setBoard(newBoard));
        dispatch(setIsHumanTurn(true));
      }, 600);
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
  }, [board]);

  return (
    <div className={classes.container}>
      <div className={classes.sub_container}>
        <div className={classes.game_title}>
          <h1 className={classes.title}>Tic-Tac-Toe</h1>
        </div>

        <div className={classes.player_turn_indicator}>
          <h1>{isHumanTurn ? "Player X's Turn " : "Computer O's Turn"}</h1>
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
            {isHumanTurn ? null : computerMove()}
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
      {audioPlay ? <UserTurnAudio /> : <ComputerTurnAudio />}
    </div>
  );
};

export default Grid7;
