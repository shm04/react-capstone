import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getLeagues = createAsyncThunk('leagues/getLeagues', async () => {
  const response = await fetch('https://api-football-standings.azharimm.dev/leagues');
  const data = await response.json();
  return data;
});

const initialState = {
  leagues: [],
  loading: false,
  status: 'idle',
  error: null,
};

const leaguesSlice = createSlice({
  name: 'leagues',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLeagues.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLeagues.fulfilled, (state, action) => {
        const payloadArray = Array.isArray(action.payload.data) ? action.payload.data : [];
        return {
          ...state,
          loading: false,
          status: 'Data fetch succeeded',
          leagues: [
            ...state.leagues,
            ...payloadArray.map((league) => ({
              id: league.id,
              name: league.name,
              logo: league.logos, // Assuming there is only one logo URL in the logos array
            })),
          ],
        };
      })      
      .addCase(getLeagues.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.error = action.error.message;
      });
  },  
});

export default leaguesSlice.reducer;
