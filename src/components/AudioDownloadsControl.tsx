import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';
import cx from 'classnames';
import * as React from 'react';
import { IAudioPlayerColors } from './AudioPlayer';

const useComponentStyles = makeStyles({
  commonContainer: {
    flex: '0 0 auto',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  downloadLink: (props: any) => ({
    color: props.playerColors.active,
    textDecoration: 'none',
    '&:hover': {
      color: props.playerColors.hover,
    },
    '&:focus': {
      color: props.playerColors.active,
    },
    '&:active': {
      color: props.playerColors.active,
    },
  }),
  downloadsContainer: {
    position: 'absolute',
    width: 'auto',
    top: '85%',
  },
  downloadsItemContainer: {
    padding: '8px 14px',
  },
  cloudDownloadIconContainer: {
    position: 'relative',
  },
  cloudDownloadIcon: (props: any) => ({
    color: props.playerColors.active,
    '&:hover': {
      color: props.playerColors.hover,
    },
  }),
});

interface IAudioDownloadsControl {
  src: string | string[];
  playerColors: IAudioPlayerColors;
  classNames?: any;
}

export const AudioDownloadsControl: React.FunctionComponent<IAudioDownloadsControl> = ({
  src,
  playerColors,
  classNames = {},
}) => {
  const classes = useComponentStyles({ playerColors });
  const [downloadsDropdownOpened, openDownloadsDropdown] = React.useState(
    false
  );
  const theme: { [key: string]: any } = useTheme();
  const toggleDownloadsDropdown = (value: boolean) => () => {
    openDownloadsDropdown(value);
  };
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return Array.isArray(src) ? (
    isMobile ? (
      <Grid item={true} className={classes.commonContainer}>
        <a className={classes.downloadLink} href={src[0]} download={true}>
          <CloudDownload fontSize="large" className={classNames.downloadIcon} />
        </a>
      </Grid>
    ) : (
      <Grid
        item={true}
        className={cx(
          classes.commonContainer,
          classes.cloudDownloadIconContainer
        )}
        onMouseEnter={toggleDownloadsDropdown(true)}
        onMouseLeave={toggleDownloadsDropdown(false)}
      >
        <CloudDownload
          fontSize="large"
          className={cx(classes.cloudDownloadIcon, classNames.downloadsIcon)}
        />
        {downloadsDropdownOpened && (
          <Grid
            container={true}
            direction="column"
            alignItems="center"
            justify="center"
            component={Paper}
            className={classes.downloadsContainer}
          >
            {src.map((srcLink, index) => {
              return (
                <Grid
                  key={index}
                  item={true}
                  className={cx(
                    classes.downloadsItemContainer,
                    classNames.downloadsContainer
                  )}
                >
                  <a
                    className={cx(
                      classes.downloadLink,
                      classNames.downloadsItemLink
                    )}
                    href={srcLink}
                    download={true}
                  >
                    <Typography
                      color="textPrimary"
                      className={classNames.downloadsItemText}
                    >
                      {srcLink
                        .substring(srcLink.lastIndexOf('.') + 1)
                        .toUpperCase()}
                    </Typography>
                  </a>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Grid>
    )
  ) : (
    <Grid item={true} className={classes.commonContainer}>
      <a className={classes.downloadLink} href={src} download={true}>
        <CloudDownload fontSize="large" className={classNames.downloadIcon} />
      </a>
    </Grid>
  );
};

export default React.memo(AudioDownloadsControl);
