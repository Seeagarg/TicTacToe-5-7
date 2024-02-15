import React, { useState, useEffect } from "react";
import classes from "./grid4.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setBoard, setIsHumanTurn, setWinner } from "../slices/tiles5Slice";
import { closeModal, openModal } from "../slices/modalSlice";
import GameOverModal from "../components/GameOverModal";

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

const calculateWinner = (board) => {
  console.log("Calculate winner");
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
      console.log(board[b], "winner");
      return board[b];
    }
  }

  return null;
};

function doesObjectExistAtIndexWithValue(array, indexToCheck, valueToCheck) {
  const foundObject = array[indexToCheck] !== "";
  return foundObject && array[indexToCheck] === valueToCheck;
}

const getSmartComputerMove = (board) => {
  console.log("if exist");

  if (
    doesObjectExistAtIndexWithValue(board, 2, "X") &&
    doesObjectExistAtIndexWithValue(board, 3, "X") &&
    !doesObjectExistAtIndexWithValue(board, 1, "O") &&
    !doesObjectExistAtIndexWithValue(board, 1, "X")
  ) {
    return 1;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 1, "X") &&
    doesObjectExistAtIndexWithValue(board, 2, "X") &&
    !doesObjectExistAtIndexWithValue(board, 3, "O") &&
    !doesObjectExistAtIndexWithValue(board, 3, "X")
  ) {
    console.log("ifexist");
    return 3;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 6, "X") &&
    doesObjectExistAtIndexWithValue(board, 7, "X") &&
    !doesObjectExistAtIndexWithValue(board, 8, "O") &&
    !doesObjectExistAtIndexWithValue(board, 8, "X")
  ) {
    return 8;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 8, "X") &&
    doesObjectExistAtIndexWithValue(board, 7, "X") &&
    !doesObjectExistAtIndexWithValue(board, 6, "O") &&
    !doesObjectExistAtIndexWithValue(board, 6, "X")
  ) {
    return 6;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 11, "X") &&
    doesObjectExistAtIndexWithValue(board, 12, "X") &&
    !doesObjectExistAtIndexWithValue(board, 13, "O") &&
    !doesObjectExistAtIndexWithValue(board, 13, "X")
  ) {
    return 13;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 13, "X") &&
    doesObjectExistAtIndexWithValue(board, 12, "X") &&
    !doesObjectExistAtIndexWithValue(board, 11, "O") &&
    !doesObjectExistAtIndexWithValue(board, 11, "X")
  ) {
    return 11;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 16, "X") &&
    doesObjectExistAtIndexWithValue(board, 17, "X") &&
    !doesObjectExistAtIndexWithValue(board, 18, "O") &&
    !doesObjectExistAtIndexWithValue(board, 18, "X")
  ) {
    return 18;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 17, "X") &&
    doesObjectExistAtIndexWithValue(board, 18, "X") &&
    !doesObjectExistAtIndexWithValue(board, 16, "O") &&
    !doesObjectExistAtIndexWithValue(board, 16, "X")
  ) {
    return 16;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 21, "X") &&
    doesObjectExistAtIndexWithValue(board, 22, "X") &&
    !doesObjectExistAtIndexWithValue(board, 23, "O") &&
    !doesObjectExistAtIndexWithValue(board, 23, "X")
  ) {
    return 23;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 22, "X") &&
    doesObjectExistAtIndexWithValue(board, 23, "X") &&
    !doesObjectExistAtIndexWithValue(board, 21, "O") &&
    !doesObjectExistAtIndexWithValue(board, 21, "X")
  ) {
    return 21;
  }

  if (
    doesObjectExistAtIndexWithValue(board, 5, "X") &&
    doesObjectExistAtIndexWithValue(board, 10, "X") &&
    !doesObjectExistAtIndexWithValue(board, 15, "O") &&
    !doesObjectExistAtIndexWithValue(board, 15, "X")
  ) {
    return 15;
  }

  if (
    doesObjectExistAtIndexWithValue(board, 10, "X") &&
    doesObjectExistAtIndexWithValue(board, 15, "X") &&
    !doesObjectExistAtIndexWithValue(board, 5, "O") &&
    !doesObjectExistAtIndexWithValue(board, 5, "X")
  ) {
    return 5;
  }

  if (
    doesObjectExistAtIndexWithValue(board, 6, "X") &&
    doesObjectExistAtIndexWithValue(board, 11, "X") &&
    !doesObjectExistAtIndexWithValue(board, 16, "O") &&
    !doesObjectExistAtIndexWithValue(board, 16, "X")
  ) {
    return 16;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 11, "X") &&
    doesObjectExistAtIndexWithValue(board, 16, "X") &&
    !doesObjectExistAtIndexWithValue(board, 6, "O") &&
    !doesObjectExistAtIndexWithValue(board, 6, "X")
  ) {
    return 6;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 7, "X") &&
    doesObjectExistAtIndexWithValue(board, 12, "X") &&
    !doesObjectExistAtIndexWithValue(board, 17, "O") &&
    !doesObjectExistAtIndexWithValue(board, 17, "X")
  ) {
    return 17;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 12, "X") &&
    doesObjectExistAtIndexWithValue(board, 17, "X") &&
    !doesObjectExistAtIndexWithValue(board, 7, "O") &&
    !doesObjectExistAtIndexWithValue(board, 7, "X")
  ) {
    return 7;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 8, "X") &&
    doesObjectExistAtIndexWithValue(board, 13, "X") &&
    !doesObjectExistAtIndexWithValue(board, 18, "O") &&
    !doesObjectExistAtIndexWithValue(board, 18, "X")
  ) {
    return 18;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 13, "X") &&
    doesObjectExistAtIndexWithValue(board, 18, "X") &&
    !doesObjectExistAtIndexWithValue(board, 8, "O") &&
    !doesObjectExistAtIndexWithValue(board, 8, "X")
  ) {
    return 8;
  }
  if (
    doesObjectExistAtIndexWithValue(board, 9, "X") &&
    doesObjectExistAtIndexWithValue(board, 14, "X") &&
    !doesObjectExistAtIndexWithValue(board, 19, "O") &&
    !doesObjectExistAtIndexWithValue(board, 19, "X")
  ) {
    return 19;
  }

  for (let i = 0; i < 25; i++) {
    if (board[i] === "") {
      const newBoard = [...board];
      newBoard[i] = "O";
      if (calculateWinner(newBoard)) {
        return i;
      }
      newBoard[i] = "";
    }
  }

  for (let i = 0; i < 25; i++) {
    if (board[i] === "") {
      const newBoard = [...board];
      newBoard[i] = "X";
      if (calculateWinner(newBoard)) {
        return i;
      }
      newBoard[i] = ""; 
    }
  }

  function randomIndex() {
    const randomNumber = Math.floor(Math.random() * 25);
    console.log(randomNumber, "random");
    const check = board.every((item) => item !== "");
    console.log(check);
    if (board[randomNumber] == "") {
      console.log("execute here!", randomNumber);
      return randomNumber;
    } else if (check) {
      console.log("exit", "-----draw");
      return;
    } else {
      console.log("recall");
      return randomIndex();
    }
  }

  return randomIndex();
};

const Grid4 = () => {
  const dispatch = useDispatch();
  const [winType, setWinType] = useState("");
  const { board, isHumanTurn, winner } = useSelector(
    (state) => state.tiles5Slice
  );

  const { modal } = useSelector((state) => state.modalSlice);

  const handleCellClick = (index) => {
    // console.log(calculateWinner(),"WINNER");
    if (board[index] === "" && isHumanTurn) {
      const newBoard = [...board];
      newBoard[index] = "X";
      dispatch(setBoard(newBoard));
      dispatch(setIsHumanTurn(false));
    }
  };

  const computerMove = () => {
    const checkWinner = calculateWinner(board)
    if (!checkWinner) {
      const moveIndex = getSmartComputerMove(board);
      const newBoard = [...board];
      newBoard[moveIndex] = "O";
      setTimeout(() => {
        dispatch(setBoard(newBoard));
        dispatch(setIsHumanTurn(true));
      }, 600);
    }
  };

  const closeModalHandler = () => {
    setWinType("");
    localStorage.removeItem("WINNER")
    dispatch(closeModal());
  };

 
  useEffect(() => {
    const checkWinner = calculateWinner(board);
    if (checkWinner) {
      dispatch(setWinner(checkWinner));
    }
  }, [handleCellClick, computerMove]);

  if (winner) {
    dispatch(openModal());
    
  }

  useEffect(()=>{
    if(board.every((item)=>item != "")){
      setWinType("0");
      dispatch(openModal());
    }
  })

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
                    
                    : null
                }
              `}
                onClick={() => handleCellClick(index)}
              >
                {cell}
              </div>
            ))}
            {isHumanTurn ? null : computerMove()}
          </div>
        </div>
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

export default Grid4;
