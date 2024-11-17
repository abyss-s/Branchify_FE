import { configureStore, createSlice } from '@reduxjs/toolkit';

const scrollSlice = createSlice({
  name: 'scroll',
  initialState: {
    scrollToJoinForm: null,
  },
  reducers: {
    setScrollToJoinForm(state, action) {
      state.scrollToJoinForm = action.payload;
    },
  },
});

export const { setScrollToJoinForm } = scrollSlice.actions;

const store = configureStore({
  reducer: {
    scroll: scrollSlice.reducer,
  },
});

export default store;
