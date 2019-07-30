import { Grid, Paper, Typography, useMediaQuery } from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import cx from 'classnames';
import * as React from 'react';

interface IAudioDownloadsControl {
  src: any;
  mainColor: string;
  classNames?: any;
}

export const useComponentStyles = makeStyles({
  commonContainer: {
    flex: '0 0 auto',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  playCircleIcon: (props: any) => ({
    color: props.mainColor
  }),
  icon: (props: any) => ({
    color: props.mainColor
  }),
  downloadLink: (props: any) => ({
    color: props.mainColor,
    textDecoration: 'none',
    '&:hover': {
      color: props.mainColor
    },
    '&:focus': {
      color: props.mainColor
    },
    '&:active': {
      color: props.mainColor
    }
  }),
  downloadsContainer: {
    position: 'absolute',
    width: 'auto',
    top: '85%'
  },
  downloadsItemContainer: {
    padding: '8px 14px'
  },
  cloudDownloadIconContainer: {
    position: 'relative'
  },
  cloudDownloadIcon: (props: any) => ({
    color: props.mainColor
  })
});

export const AudioDownloadsControl: React.FunctionComponent<
  IAudioDownloadsControl
> = ({ src, mainColor, classNames = {} }) => {
  const classes = useComponentStyles({ mainColor });
  const [downloadsDropdownOpened, openDownloadsDropdown] = React.useState(
    false
  );
  const toggleDownloadsDropdown = (value: boolean) => () => {
    openDownloadsDropdown(value);
  };
  return Array.isArray(src) ? (
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
        className={cx(classes.cloudDownloadIcon, classNames.downloadIcon)}
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
                className={classes.downloadsItemContainer}
              >
                <a
                  className={classes.downloadLink}
                  href={srcLink}
                  download={true}
                >
                  <Typography color="textPrimary">
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
  ) : (
    <Grid item={true} className={classes.commonContainer}>
      <a className={classes.downloadLink} href={src} download={true}>
        <CloudDownload fontSize="large" className={classNames.downloadIcon} />
      </a>
    </Grid>
  );
};

export default AudioDownloadsControl;
