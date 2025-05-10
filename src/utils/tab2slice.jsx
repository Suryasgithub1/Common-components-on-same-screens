import { createSlice } from '@reduxjs/toolkit';

const tab2Slice = createSlice({
  name: 'tab2',
  initialState: {
    data: [],
  },
  reducers: {
    setTab2Data: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setTab2Data } = tab2Slice.actions;
export default tab2Slice.reducer;
