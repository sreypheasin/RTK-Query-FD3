import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";

export default configureStore({
  reducer: {
    counterR: counterSlice
  }
});
