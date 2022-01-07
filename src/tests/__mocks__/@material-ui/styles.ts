// Grab the original exports
import { createTheme, adaptV4Theme } from '@mui/material';
import * as Styles from '@mui/styles';

const makeStyles = () => {
  return () => {
    return {};
  };
};
const useTheme = () => {
  return createTheme(adaptV4Theme({}));
};

module.exports = { ...Styles, makeStyles, useTheme };
