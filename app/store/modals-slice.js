import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showLogin: false,
  showRegister: false,
  showContact: false,
  tourId: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showLogin(state) {
      state.showLogin = true;
      state.showRegister = false;
    },
    hideLogin(state) {
      state.showLogin = false;
      console.log(state);
    },
    showRegister(state) {
      state.showRegister = true;
      state.showLogin = false;
    },
    hideRegister(state) {
      state.showRegister = false;
    },
    showContact(state) {
      state.showContact = true;
      // state.tourId = action.payload;
    },
    hideContact(state) {
      state.showContact = false;
      // state.tourId = "";
    },
  },
});
// export const { reset, updateUser } = modalSlice.actions;

export const modalActions = modalSlice.actions;
