import { PLAYER_STATUS_PAUSE, PLAYER_STATUS_PLAY } from './actions';
import PlAYER from './constants';

export default function reducer(state, action) {
  switch (action.type) {
    case PLAYER_STATUS_PLAY:
      return {
        player: {
          ...state.player,
          status: PlAYER.STATUS.PLAY
        }
      };
    case PLAYER_STATUS_PAUSE:
      return {
        player: {
          ...state.player,
          status: PlAYER.STATUS.PAUSE
        }
      };
    default:
      return state;
  }
}
