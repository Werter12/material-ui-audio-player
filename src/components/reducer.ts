import {
  PLAYER_STATUS_PAUSE,
  PLAYER_STATUS_PLAY,
  PLAYER_VOLUME_CHANGE,
  PLAYER_VOLUME_STATUS_MUTE,
  PLAYER_VOLUME_STATUS_UNMUTE
} from './actions';
import PLAYER from './player';

export default function reducer(state, action) {
  switch (action.type) {
    case PLAYER_STATUS_PLAY:
      return {
        player: {
          ...state.player,
          status: PLAYER.STATUS.PLAY
        }
      };
    case PLAYER_STATUS_PAUSE:
      return {
        player: {
          ...state.player,
          status: PLAYER.STATUS.PAUSE
        }
      };
    case PLAYER_VOLUME_STATUS_UNMUTE:
      return {
        player: {
          ...state.player,
          volume: {
            ...state.player.volume,
            status: PLAYER.VOLUME.STATUS.UNMUTE
          }
        }
      };
    case PLAYER_VOLUME_STATUS_MUTE:
      return {
        player: {
          ...state.player,
          volume: {
            ...state.player.volume,
            status: PLAYER.VOLUME.STATUS.MUTE
          }
        }
      };
    case PLAYER_VOLUME_CHANGE:
      return {
        player: {
          ...state.player,
          volume: {
            status: PLAYER.VOLUME.STATUS.UNMUTE,
            value: action.volumeValue
          }
        }
      };
    default:
      return state;
  }
}
