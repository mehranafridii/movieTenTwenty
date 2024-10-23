import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

const initialState = {
  genreData: null,
};

const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    setGenre: (state, action) => {
      state.genreData = action.payload;
    },
  },
});

export const {setGenre} = genreSlice.actions;

export const getGenreData = state => state.genre.genreData;

// export default authSlice?.re
export default {initialState, reducer: genreSlice.reducer};
