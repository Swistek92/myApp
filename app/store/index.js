import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modals-slice";
const store = configureStore({
  reducer: { modal: modalSlice.reducer },
});

export default store;
