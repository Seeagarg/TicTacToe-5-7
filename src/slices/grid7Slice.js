import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("tiles7Slice")
  ? JSON.parse(localStorage.getItem("tiles7Slice"))
  : {
      board: Array(49).fill(""),
      isHumanTurn: true,
      winner: null,
    };

const grid7Slice = createSlice({
    name: "tiles7Slice",
    initialState,
    reducers: {
      setBoard: (state, action) => {
        state.board = action.payload;
        localStorage.setItem("tiles7Slice", JSON.stringify(state));
        return state;
      },
      setIsHumanTurn: (state, action) => {
        state.isHumanTurn = action.payload;
        localStorage.setItem("tiles7Slice", JSON.stringify(state)); 
        return state;
      },
      setWinner: (state, action) => {
        state.winner = action.payload;
        localStorage.setItem("tiles7Slice", JSON.stringify(state));
        return state;
      },
      resetTiles7Slice: (state, action) => {
        state.board = Array(49).fill("");
        state.isHumanTurn = true;
        state.winner=null;
        localStorage.removeItem("tiles7Slice");
        return state;
      },
    },

    

});

export const { setBoard, setWinner, setIsHumanTurn, resetTiles7Slice } =
  grid7Slice.actions;
export default grid7Slice;