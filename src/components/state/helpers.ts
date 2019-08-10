export const appendZero = num => (num < 10 ? `0${num}` : num);

export const getFormattedTime = time => {
  const dateTime = new Date(0, 0, 0, 0, 0, time, 0);

  const dateTimeM = appendZero(dateTime.getMinutes());
  const dateTimeS = appendZero(dateTime.getSeconds());

  return `${dateTimeM}:${dateTimeS}`;
};

export const getProgress = (currentTime: number, duration: number) =>
  parseFloat((100 * (currentTime / duration)).toString());

export const getCurrentTime = (progress: number, duration: number) =>
  parseFloat(((progress * duration) / 100).toString());

export const populateDispatch = (dispatch, player, ...funcs) => {
  return funcs.reduce((acc, func) => {
    const compFuncName = func.name.replace('_actions_', '');
    return { ...acc, [`_${compFuncName}`]: func(dispatch, player) };
  }, {});
};
