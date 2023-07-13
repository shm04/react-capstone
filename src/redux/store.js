import { configureStore } from '@reduxjs/toolkit';
import leagueReducer from './leagues/leaguesSlice';

const store = configureStore({
  reducer: {
    league: leagueReducer,
  },
});

export default store;
