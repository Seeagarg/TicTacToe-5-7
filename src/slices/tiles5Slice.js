import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("tiles5Slice")
  ? JSON.parse(localStorage.getItem("tiles5Slice"))
  : {
      board: Array(25).fill(""),
      isHumanTurn: true,
      winner: null,
    };

const tiles5Slice = createSlice({
  name: "tiles5Slice",
  initialState,
  reducers: {
    setBoard: (state, action) => {
      state.board = action.payload;
      localStorage.setItem("tiles5Slice", JSON.stringify(state));
      return state;
    },
    setIsHumanTurn: (state, action) => {
      state.isHumanTurn = action.payload;
      localStorage.setItem("tiles5Slice", JSON.stringify(state)); 
      return state;
    },
    setWinner: (state, action) => {
      state.winner = action.payload;
      localStorage.setItem("tiles5Slice", JSON.stringify(state));
      return state;
    },
    resetTiles5Slice: (state, action) => {
      state.board = Array(25).fill("");
      state.isHumanTurn = true;
      state.winner=null;
      localStorage.removeItem("tiles5Slice");
      return state;
    },
  },
});

export const { setBoard, setWinner, setIsHumanTurn, resetTiles5Slice } =
  tiles5Slice.actions;
export default tiles5Slice;
