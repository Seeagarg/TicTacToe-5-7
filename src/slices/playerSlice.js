import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";



const initialState = localStorage.getItem("player")
  ? JSON.parse(localStorage.getItem("player"))
  : {
      player1: true,
      initialStatePlayer:true,
      computer: false ,
      player2:false
    };

const playerSlice = createSlice({
  name: "playerSlice",
  initialState: initialState,
  reducers: {

    setInitialTurn:(state,action)=>{
        state.player1 = true;
        state.computer = false;
        state.player2 = false;
        localStorage.removeItem("player");
        return state;
    },
    
    toggleTurn: (state, action) => {
      state.player1 = !state.player1;
      state.computer = !state.computer;
      state.player2 = !state.player2;
      localStorage.setItem("player", JSON.stringify(state));
      return state;
    },
    resetPlayerState:(state,action)=>{
      if(state.initialStatePlayer){
        state.player1 = false;
        state.computer = true;
        state.player2 = false;
        state.initialStatePlayer = false;
        localStorage.removeItem("player");
        return state;
      }
      else{
        state.player1 = true;
        state.computer = false;
        state.player2 = false;
        state.initialStatePlayer = true;
        localStorage.removeItem("player");
        return state;
      }
        
    }
  },
});

export const {  toggleTurn , resetPlayerState,setInitialTurn } = playerSlice.actions;
export default playerSlice;
