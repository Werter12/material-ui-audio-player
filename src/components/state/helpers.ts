export const appendZero = num => (num < 10 ? `0${num}` : num);

export const getFormattedTime = time => {
  const dateTime = new Date(0, 0, 0, 0, 0, time, 0);

  const dateTimeH = appendZero(dateTime.getHours());
  const dateTimeM = appendZero(dateTime.getMinutes());
  const dateTimeS = appendZero(dateTime.getSeconds());

  return (dateTimeH > 0 ? `${dateTimeH}:${dateTimeM}:${dateTimeS}` : `${dateTimeM}:${dateTimeS}`);
};

export const getProgress = (currentTime: number, duration: number) =>
  parseFloat((100 * (currentTime / duration)).toString());

export const getCurrentTime = (progress: number, duration: number) =>
  parseFloat(((progress * duration) / 100).toString());

export const populateDispatch = (dispatch, player, ...funcs) => {
  return funcs.reduce((acc, func) => {
    acc.push(func(dispatch, player));
    return acc;
  }, []);
};
