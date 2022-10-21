import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { vbl: [], moreData: [] };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    //pure function don't any side effect
    api(state, action) {
      state.vbl = action.payload;
    },
    secondApi(state, action) {
      state.moreData = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    // auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;

export default store;
