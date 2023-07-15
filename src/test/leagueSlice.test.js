import leaguesReducer, { getLeagues } from '../redux/leagues/leaguesSlice';

describe('leagues reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      leagues: [],
      loading: false,
      status: 'idle',
      error: null,
    };

    const nextState = leaguesReducer(undefined, {});
    expect(nextState).toEqual(initialState);
  });

  it('should handle getLeagues.pending', () => {
    const nextState = leaguesReducer(undefined, getLeagues.pending());
    expect(nextState.loading).toBe(true);
  });

  it('should handle getLeagues.fulfilled', () => {
    const initialState = {
      leagues: [],
      loading: true,
      status: 'idle',
      error: null,
    };

    const payload = {
      data: [
        {
          id: '1',
          name: 'League 1',
          logos: { light: 'logo-light.png', dark: 'logo-dark.png' },
          slug: 'league-1',
          abbr: 'L1',
        },
      ],
    };

    const nextState = leaguesReducer(initialState, getLeagues.fulfilled(payload));
    expect(nextState.loading).toBe(false);
    expect(nextState.status).toBe('Data fetch succeeded');
    expect(nextState.leagues).toEqual([
      {
        id: '1',
        name: 'League 1',
        logo: { light: 'logo-light.png', dark: 'logo-dark.png' },
        slug: 'league-1',
        abbr: 'L1',
      },
    ]);
  });

  it('should handle getLeagues.rejected', () => {
    const initialState = {
      leagues: [],
      loading: true,
      status: 'idle',
      error: null,
    };

    const error = { message: 'Request failed' };

    const nextState = leaguesReducer(initialState, getLeagues.rejected(error));
    expect(nextState.loading).toBe(false);
    expect(nextState.status).toBe('failed');
    expect(nextState.error).toBe('Request failed');
  });
});
