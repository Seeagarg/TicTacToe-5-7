import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("tilesHardMode")
  ? JSON.parse(localStorage.getItem("tilesHardMode"))
  : {
      tilesHardMode: [],
    };

const tilesSliceHardMode = createSlice({
  name: "tilesSliceHardMode",
  initialState: initialState,
  reducers: {
    setTilesHardMode: (state, action) => {
      state.tilesHardMode = [...state.tilesHardMode, action.payload];
      localStorage.setItem("tilesHardMode", JSON.stringify(state));
      return state;
    },
    setTilesHardModeComputer: (state, action) => {
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
          console.log(array,"testing array")
          const foundObject = array.find((obj) => obj.index === indexToCheck);

          return foundObject && foundObject.value === valueToCheck;
        }








        if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 1, "O") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 2, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 3, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 3, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 3, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 4, "O") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 6, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 6, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 6, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "O") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 8, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 9, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        }

        else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 1, "O") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 4, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 7, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 2, "O") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 8, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 8, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 8, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 3, "O") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 6, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 9, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        }

        else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 1, "O") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 9, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 3, "O") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 7, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 3, "O") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 5, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 1, "O") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 6, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "O") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 1, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 1, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 1, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "O") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 3, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 3, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 3, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 6, "O") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 4, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 4, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 4, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 2, "O") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 3, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 1, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 1, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 1, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "O") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 8, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 7, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 4, "O") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode,1, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 1, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 1, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "O") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 8, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode,2, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 2, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 2, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        }
        else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 6, "O") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode,3, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 3, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 3, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        }







        if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 1, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 2, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 3, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 3, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 3, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 4, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 6, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 6, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 6, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 8, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 9, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 1, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 4, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 7, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 2, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 8, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 8, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 8, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 3, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 6, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 9, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 1, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 9, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 3, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 7, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 1, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 5, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 1, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 1, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 1, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 3, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 5, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 3, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 3, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 3, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 1, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 3, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 2, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 2, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 2, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 4, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 6, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 5, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 8, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 8, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 8, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 3, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 2, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 1, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 1, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 1, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 6, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 4, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 4, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 4, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 8, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 7, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 1, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 7, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 4, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 4, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 4, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 2, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 8, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 5, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 5, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 3, "X") &&
          doesObjectExistAtIndexWithValue(state.tilesHardMode, 9, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 6, "O") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, 6, "X")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: 6, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, number, "X") &&
          !doesObjectExistAtIndexWithValue(state.tilesHardMode, number, "O")
        ) {
          state.tilesHardMode = [
            ...state.tilesHardMode,
            { index: number, value: "O" },
          ];
          localStorage.setItem("tilesHardMode", JSON.stringify(state));
          return state;
        } else if (state.tilesHardMode.length == 9) {
          return;
        }








         else {
          return randomTile();
        }
      };
      randomTile();
    },
    resetTilesHardMode: (state, action) => {
      state.tilesHardMode = [];
      localStorage.removeItem("tilesHardMode");
      return state;
    },
  },
});

export const {
  setTilesHardMode,
  resetTilesHardMode,
  setTilesHardModeComputer,
} = tilesSliceHardMode.actions;
export default tilesSliceHardMode;
