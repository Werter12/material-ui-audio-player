import { getCurrentTime, getProgress } from './helpers';

const PLAYER_STATUS_PLAY = 'PLAYER_STATUS_PLAY';
const PLAYER_STATUS_PAUSE = 'PLAYER_STATUS_PAUSE';
const PLAYER_VOLUME_STATUS_UNMUTE = 'PLAYER_VOLUME_STATUS_UNMUTE';
const PLAYER_VOLUME_STATUS_MUTE = 'PLAYER_VOLUME_STATUS_MUTE';
const PLAYER_VOLUME_CHANGE = 'PLAYER_VOLUME_CHANGE';
const PLAYER_SET_DURATION = 'PLAYER_SET_DURATION';
const PLAYER_SET_TIME = 'PLAYER_SET_TIME';
const PLAYER_SLIDER_MOVED = 'PLAYER_SLIDER_MOVED';

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
const setPlayerDuration = (dispatch, player) => () => {
  dispatch({ type: PLAYER_SET_DURATION, duration: player.current.duration });
};
const setPlayerTime = (dispatch, player) => () => {
  dispatch({
    type: PLAYER_SET_TIME,
    current: player.current.currentTime,
    progress: getProgress(player.current.currentTime, player.current.duration)
  });
};
const changePlayerSlider = (dispatch, player) => (progress: number) => {
  const currentTime = getCurrentTime(progress, player.current.duration);
  if (!isNaN(currentTime)) {
    player.current.currentTime = currentTime;
  }
  dispatch({ type: PLAYER_SLIDER_MOVED, progress, current: currentTime });
};

export {
  playAudio,
  pauseAudio,
  muteAudio,
  unmuteAudio,
  changeAudioVolume,
  setPlayerDuration,
  setPlayerTime,
  changePlayerSlider,
  PLAYER_VOLUME_STATUS_UNMUTE,
  PLAYER_VOLUME_STATUS_MUTE,
  PLAYER_STATUS_PLAY,
  PLAYER_STATUS_PAUSE,
  PLAYER_VOLUME_CHANGE,
  PLAYER_SET_DURATION,
  PLAYER_SET_TIME,
  PLAYER_SLIDER_MOVED
};
