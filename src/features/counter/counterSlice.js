import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    countValue: 0
  },
  reducers: {
    increase: (state, action) => {
      state.countValue += 1;
    }
  }
});

// export reducer
export default counterSlice.reducer;

// export action
export const { increase } = counterSlice.actions;

// export selector
export const selectCountValue = (state) => state.counterR.countValue;
