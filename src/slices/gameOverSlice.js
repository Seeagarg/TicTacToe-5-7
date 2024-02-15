import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("gameOver")
  ? JSON.parse(localStorage.getItem("gameOver"))
  : {
      gameOver: false,
    };

const gameOverSlice = createSlice({
  name: "gameOverSlice",
  initialState: initialState,
  reducers: {
    setGameOver: (state, action) => {
      state.gameOver = true;
      localStorage.setItem("gameOver", JSON.stringify(state));
      return state;
    },
    resetGameOver: (state, action) => {
      state.gameOver = false;
      localStorage.removeItem("gameOver");
      return state;
    },
  },
});

export const { setGameOver, resetGameOver } = gameOverSlice.actions;
export default gameOverSlice;
