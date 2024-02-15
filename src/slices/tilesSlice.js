import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("tiles")
  ? JSON.parse(localStorage.getItem("tiles"))
  : {
      oneTile: "",
      twoTile: "",
      threeTile: "",
      fourTile: "",
      fiveTile: "",
      sixTile: "",
      sevenTile: "",
      eightTile: "",
      nineTile: "",
    };

const tilesSlice = createSlice({
  name: "tilesSlice",
  initialState: initialState,
  reducers: {
    oneTileHandler: (state, action) => {
      state.oneTile = action.payload;
      localStorage.setItem("tiles", JSON.stringify(state));
      return state;
    },
    twoTileHandler: (state, action) => {
      state.twoTile = action.payload;
      localStorage.setItem("tiles", JSON.stringify(state));
      return state;
    },
    threeTileHandler: (state, action) => {
      state.threeTile = action.payload;
      localStorage.setItem("tiles", JSON.stringify(state));
      return state;
    },
    fourTileHandler: (state, action) => {
      state.fourTile = action.payload;
      localStorage.setItem("tiles", JSON.stringify(state));
      return state;
    },
    fiveTileHandler: (state, action) => {
      state.fiveTile = action.payload;
      localStorage.setItem("tiles", JSON.stringify(state));
      return state;
    },
    sixTileHandler: (state, action) => {
      state.sixTile = action.payload;
      localStorage.setItem("tiles", JSON.stringify(state));
      return state;
    },
    sevenTileHandler: (state, action) => {
      state.sevenTile = action.payload;
      localStorage.setItem("tiles", JSON.stringify(state));
      return state;
    },
    eightTileHandler: (state, action) => {
      state.eightTile = action.payload;
      localStorage.setItem("tiles", JSON.stringify(state));
      return state;
    },
    nineTileHandler: (state, action) => {
      state.nineTile = action.payload;
      localStorage.setItem("tiles", JSON.stringify(state));
      return state;
    },
    randomTileHandler: (state, action) => {
      const randomTile = () => {
        const getRandomNumber = () => {
          return Math.floor(Math.random() * 9) + 1;
        };

        let number = getRandomNumber().toString();

        if (number === "1" && state.oneTile === "") {
          state.oneTile = action.payload;
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        } else if (number === "2" && state.twoTile === "") {
          state.twoTile = action.payload;
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        } else if (number === "3" && state.threeTile === "") {
          state.threeTile = action.payload;
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        } else if (number === "4" && state.fourTile === "") {
          state.fourTile = action.payload;
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        } else if (number === "5" && state.fiveTile === "") {
          state.fiveTile = action.payload;
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        } else if (number === "6" && state.sixTile === "") {
          state.sixTile = action.payload;
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        } else if (number === "7" && state.sevenTile === "") {
          state.sevenTile = action.payload;
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        } else if (number === "8" && state.eightTile === "") {
          state.eightTile = action.payload;
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        } else if (number === "9" && state.nineTile === "") {
          state.nineTile = action.payload;
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        } else if (
          state.oneTile !== "" &&
          state.twoTile !== "" &&
          state.threeTile !== "" &&
          state.fourTile !== "" &&
          state.fiveTile !== "" &&
          state.sixTile !== "" &&
          state.sevenTile !== "" &&
          state.eightTile !== "" &&
          state.nineTile !== ""
        ) {
          return;
        } else {
          return randomTile();
        }
      };
      randomTile();
    },

    resetTilesState: (state, action) => {
      state.oneTile = "";
      state.twoTile = "";
      state.threeTile = "";
      state.fourTile = "";
      state.fiveTile = "";
      state.sixTile = "";
      state.sevenTile = "";
      state.eightTile = "";
      state.nineTile = "";
      localStorage.removeItem("tiles");
      return state;
    },
  },
});

export const {
  oneTileHandler,
  twoTileHandler,
  threeTileHandler,
  fourTileHandler,
  fiveTileHandler,
  sixTileHandler,
  sevenTileHandler,
  eightTileHandler,
  nineTileHandler,
  resetTilesState,
  randomTileHandler,
} = tilesSlice.actions;
export default tilesSlice;
