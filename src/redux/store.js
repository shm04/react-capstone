import { configureStore } from '@reduxjs/toolkit';
import leaguesReducer from './leagues/leaguesSlice';

const store = configureStore({
  reducer: {
    league: leaguesReducer,
  },
});

export default store;
