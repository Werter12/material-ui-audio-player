const PLAYER_STATUS_PLAY = 'PLAYER_STATUS_PLAY';
const PLAYER_STATUS_PAUSE = 'PLAYER_STATUS_PAUSE';
const PLAYER_VOLUME_STATUS_UNMUTE = 'PLAYER_VOLUME_STATUS_UNMUTE';
const PLAYER_VOLUME_STATUS_MUTE = 'PLAYER_VOLUME_STATUS_MUTE';
const PLAYER_VOLUME_CHANGE = 'PLAYER_VOLUME_CHANGE';

const playAudio = (dispatch, player) => () => {
  player.current.play();
  dispatch({ type: PLAYER_STATUS_PLAY });
};
const pauseAudio = (dispatch, player) => () => {
  player.current.pause();
  dispatch({ type: PLAYER_STATUS_PAUSE });
};
const muteAudio = (dispatch, player) => () => {
  player.current.muted = true;
  dispatch({ type: PLAYER_VOLUME_STATUS_MUTE });
};
const unmuteAudio = (dispatch, player) => () => {
  player.current.muted = false;
  dispatch({ type: PLAYER_VOLUME_STATUS_UNMUTE });
};
const changeAudioVolume = (dispatch, player) => (value: number) => {
  player.current.volume = value > 0 ? value / 100 : 0;
  if (player.current.muted) {
    player.current.muted = false;
  }
  dispatch({ type: PLAYER_VOLUME_CHANGE, volumeValue: value });
};

export {
  playAudio,
  pauseAudio,
  muteAudio,
  unmuteAudio,
  changeAudioVolume,
  PLAYER_VOLUME_STATUS_UNMUTE,
  PLAYER_VOLUME_STATUS_MUTE,
  PLAYER_STATUS_PLAY,
  PLAYER_STATUS_PAUSE,
  PLAYER_VOLUME_CHANGE
};
