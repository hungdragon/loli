import {createSlice} from '@reduxjs/toolkit';
interface State {
  common: any;
}

const initialState: State = {
  common: {},
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder;
  },
});

export default loginSlice.reducer;
