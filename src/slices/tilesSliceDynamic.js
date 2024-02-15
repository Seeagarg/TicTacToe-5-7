import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("tilesDynamic")
  ? JSON.parse(localStorage.getItem("tilesDynamic"))
  : {
      tiles: [],
    };

const tilesSliceDynamic = createSlice({
  name: "tilesSliceDynamic",
  initialState: initialState,
  reducers: {
    setTiles: (state, action) => {
      state.tiles = [...state.tiles, action.payload];
      localStorage.setItem("tilesDynamic", JSON.stringify(state));
      return state;
    },
    
    setTilesComputer: (state, action) => {
      const randomTile = () => {
        const getRandomNumber = () => {
          return Math.floor(Math.random() * 9) + 1;
        };

        let number = getRandomNumber();

        function doesObjectExistAtIndexWithValue(
          array,
          indexToCheck,
          valueToCheck
        ) {
          const foundObject = array.find((obj) => obj.index === indexToCheck);

          return foundObject && foundObject.value === valueToCheck;
        }

        if (
          doesObjectExistAtIndexWithValue(state.tiles, 1, "X") &&
          doesObjectExistAtIndexWithValue(state.tiles, 2, "X") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 3, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 3, "X")
        ) {
          state.tiles = [...state.tiles, { index: 3, value: "O" }];
          localStorage.setItem("tilesDynamic", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tiles, 4, "X") &&
          doesObjectExistAtIndexWithValue(state.tiles, 5, "X") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 6, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 6, "X")
        ) {
          state.tiles = [...state.tiles, { index: 6, value: "O" }];
          localStorage.setItem("tilesDynamic", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tiles, 7, "X") &&
          doesObjectExistAtIndexWithValue(state.tiles, 8, "X") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 9, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 9, "X")
        ) {
          state.tiles = [...state.tiles, { index: 9, value: "O" }];
          localStorage.setItem("tilesDynamic", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tiles, 1, "X") &&
          doesObjectExistAtIndexWithValue(state.tiles, 4, "X") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 7, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 7, "X")
        ) {
          state.tiles = [...state.tiles, { index: 7, value: "O" }];
          localStorage.setItem("tilesDynamic", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tiles, 2, "X") &&
          doesObjectExistAtIndexWithValue(state.tiles, 5, "X") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 8, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 8, "X")
        ) {
          state.tiles = [...state.tiles, { index: 8, value: "O" }];
          localStorage.setItem("tilesDynamic", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tiles, 3, "X") &&
          doesObjectExistAtIndexWithValue(state.tiles, 6, "X") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 9, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 9, "X")
        ) {
          state.tiles = [...state.tiles, { index: 9, value: "O" }];
          localStorage.setItem("tilesDynamic", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tiles, 1, "X") &&
          doesObjectExistAtIndexWithValue(state.tiles, 5, "X") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 9, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 9, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 9, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tiles, 3, "X") &&
          doesObjectExistAtIndexWithValue(state.tiles, 5, "X") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 7, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 7, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 7, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tiles, 1, "X") &&
          doesObjectExistAtIndexWithValue(state.tiles, 3, "X") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 2, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 2, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 2, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tiles, 4, "X") &&
          doesObjectExistAtIndexWithValue(state.tiles, 6, "X") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 5, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 5, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tiles, 7, "X") &&
          doesObjectExistAtIndexWithValue(state.tiles, 9, "X") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 8, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 8, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 8, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        }



        

        else if (
          doesObjectExistAtIndexWithValue(state.tiles, 1, "O") &&
          doesObjectExistAtIndexWithValue(state.tiles, 2, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 3, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 3, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 3, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tiles, 4, "O") &&
          doesObjectExistAtIndexWithValue(state.tiles, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 6, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 6, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 6, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tiles, 7, "O") &&
          doesObjectExistAtIndexWithValue(state.tiles, 8, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 9, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 9, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 9, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        }

        else if (
          doesObjectExistAtIndexWithValue(state.tiles, 1, "O") &&
          doesObjectExistAtIndexWithValue(state.tiles, 4, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 7, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 7, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 7, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tiles, 2, "O") &&
          doesObjectExistAtIndexWithValue(state.tiles, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 8, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 8, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 8, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tiles, 3, "O") &&
          doesObjectExistAtIndexWithValue(state.tiles, 6, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 9, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 9, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 9, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        }

        else if (
          doesObjectExistAtIndexWithValue(state.tiles, 1, "O") &&
          doesObjectExistAtIndexWithValue(state.tiles, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 9, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 9, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 9, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tiles, 3, "O") &&
          doesObjectExistAtIndexWithValue(state.tiles, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 7, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 7, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 7, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tiles, 3, "O") &&
          doesObjectExistAtIndexWithValue(state.tiles, 7, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 5, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 5, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tiles, 1, "O") &&
          doesObjectExistAtIndexWithValue(state.tiles, 9, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 5, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 6, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tiles, 5, "O") &&
          doesObjectExistAtIndexWithValue(state.tiles, 9, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 1, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 1, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 1, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tiles, 7, "O") &&
          doesObjectExistAtIndexWithValue(state.tiles, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 3, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 3, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 3, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tiles, 6, "O") &&
          doesObjectExistAtIndexWithValue(state.tiles, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 4, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 4, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 4, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tiles, 2, "O") &&
          doesObjectExistAtIndexWithValue(state.tiles, 3, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 1, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 1, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 1, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tiles, 9, "O") &&
          doesObjectExistAtIndexWithValue(state.tiles, 8, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 7, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 7, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 7, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tiles, 4, "O") &&
          doesObjectExistAtIndexWithValue(state.tiles, 7, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles,1, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 1, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 1, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tiles, 5, "O") &&
          doesObjectExistAtIndexWithValue(state.tiles, 8, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles,2, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 2, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 2, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tiles, 6, "O") &&
          doesObjectExistAtIndexWithValue(state.tiles, 9, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles,3, "O") &&
          !doesObjectExistAtIndexWithValue(state.tiles, 3, "X")
        ) {
          state.tiles = [
            ...state.tiles,
            { index: 3, value: "O" },
          ];
          localStorage.setItem("tiles", JSON.stringify(state));
          return state;
        }








        
        
        
        else if (
          !doesObjectExistAtIndexWithValue(state.tiles, number, "X") &&
          !doesObjectExistAtIndexWithValue(state.tiles, number, "O")
        ) {
          state.tiles = [...state.tiles, { index: number, value: "O" }];
          localStorage.setItem("tilesDynamic", JSON.stringify(state));
          return state;
        } else if (state.tiles.length == 9) {
          return;
        } else {
          return randomTile();
        }
      };
      randomTile();
    },
    resetTilesArray: (state, action) => {
      state.tiles = [];
      localStorage.removeItem("tilesDynamic");
      return state;
    },
  },
});

export const { setTiles, resetTilesArray, setTilesComputer } =
  tilesSliceDynamic.actions;
export default tilesSliceDynamic;
