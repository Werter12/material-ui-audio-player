const PLAYER_STATUS_PLAY = 'PLAYER_STATUS_PLAY';
const PLAYER_STATUS_PAUSE = 'PLAYER_STATUS_PLAY';

const playAudio = (dispatch, player) => () => {
  player.current.play();
  dispatch({ type: PLAYER_STATUS_PLAY });
};
const pauseAudio = (dispatch, player) => () => {
  player.current.pause();
  dispatch({ type: PLAYER_STATUS_PAUSE });
};

export { playAudio, pauseAudio, PLAYER_STATUS_PLAY, PLAYER_STATUS_PAUSE };
