// Grab the original exports
import { createMuiTheme } from '@material-ui/core';
import * as Styles from '@material-ui/styles';

const makeStyles = () => {
  return () => {
    return {};
  };
};
const useTheme = () => {
  return createMuiTheme({});
};

module.exports = { ...Styles, makeStyles, useTheme };
