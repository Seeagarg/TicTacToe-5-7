import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("modal")
  ? JSON.parse(localStorage.getItem("modal"))
  : {
      modal: false,
    };

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: initialState,
  reducers: {
    openModal: (state, action) => {
      state.modal = true;
      localStorage.setItem("modal", JSON.stringify(state));
      return state;
    },
    closeModal: (state, action) => {
      state.modal = false;
      localStorage.removeItem("modal");
      return state;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice;
