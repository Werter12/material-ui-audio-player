import {
  Grid,
  Paper,
  Slider,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import {
  CloudDownload,
  PauseCircleFilled,
  PlayCircleFilledWhite,
  VolumeOff,
  VolumeUp
} from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/styles';
// tslint:disable-next-line
import { StylesHook } from '@material-ui/styles/makeStyles';
import cx from 'classnames';
import * as React from 'react';
import { pauseAudio, playAudio } from './actions';
import PLAYER from './constants';
import reducer from './reducer';

function populateDispatch(dispatch, player, ...funcs) {
  return funcs.reduce((acc, func) => {
    return { ...acc, [`${func.name}Internal`]: func(dispatch, player) };
  }, {});
}

export interface IAudioPlayerClassNameProps {
  root: string;
  playIcon: any;
  volumeIcon: string;
  muteIcon: string;
  mainSlider: string;
  volumeSlider: string;
  downloadIcon: string;
  // loopIcon: string;
  // muteIcon: string;
  // slider: string;
  // track: string;
  // thumb: string;
  // text: string;
}

enum AudioPlayerVariation {
  primary = 'primary',
  secondary = 'secondary',
  classic = 'classic'
}

interface IAudioPlayerProps {
  src: string | string[];
  rounded?: boolean;
  elevation?: number;
  useStyles?: StylesHook<any>;
  width?: string;
  height?: string;
  download?: boolean;
  variation?: AudioPlayerVariation;
}

export const useComponentStyles = makeStyles((theme: any) => {
  const elevations = {};
  theme.shadows.forEach((shadow, index) => {
    elevations[`elevation${index}`] = {
      boxShadow: shadow
    };
  });

  return {
    root: (props: any) => ({
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      width: props.width,
      height: props.height,
      transition: theme.transitions.create('box-shadow')
    }),
    sliderContainer: {
      flex: '1 1 auto'
    },
    slider: (props: any) => ({
      color: props.mainColor
    }),
    commonContainer: {
      flex: '0 0 auto',
      '&:hover': {
        cursor: 'pointer'
      }
    },
    playCircleIcon: (props: any) => ({
      color: props.mainColor
    }),
    voluemeUpIcon: (props: any) => ({
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
    }),
    volumeIconContainer: {
      position: 'relative',
      '&:hover': {
        cursor: 'pointer'
      }
    },
    volumeControlContainer: {
      position: 'absolute',
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        height: '60px'
      },
      padding: '10px 5px'
    },
    rounded: {
      borderRadius: theme.shape.borderRadius
    },
    ...elevations
  };
});

const AudioPlayer: React.FunctionComponent<IAudioPlayerProps> = ({
  src,
  rounded = true,
  elevation = 1,
  useStyles = () => ({}),
  width = '100%',
  height = 'auto',
  variation = 'primary',
  download = false
}) => {
  const player = React.useRef<HTMLAudioElement | null>(null);
  const theme: { [key: string]: any } = useTheme();
  const mainColor =
    variation === 'classic'
      ? theme.palette.action.active
      : theme.palette[variation].main;
  const componentStyles = { width, height, mainColor };
  const classes = useComponentStyles(componentStyles);
  const classNames: Partial<IAudioPlayerClassNameProps> = useStyles(
    componentStyles
  );
  // const desktop = useMediaQuery(theme.breakpoints.up('sm'));
  const [volumeSlider, openVolumeSlider] = React.useState(false);
  const toggleVolumeSlider = (value: boolean) => () => {
    openVolumeSlider(value);
  };
  const [downloadsDropdownOpened, openDownloadsDropdown] = React.useState(
    false
  );
  const toggleDownloadsDropdown = (value: boolean) => () => {
    openDownloadsDropdown(value);
  };
  const downloadOptions = Array.isArray(src) ? (
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
  const inititalState = { player: { status: PLAYER.STATUS.PAUSE } };
  const [state, dispatch] = React.useReducer(reducer, inititalState);
  const { pauseAudioInternal, playAudioInternal } = populateDispatch(
    dispatch,
    player,
    pauseAudio,
    playAudio
  );
  return (
    <>
      <audio ref={player} hidden={true}>
        {Array.isArray(src) ? (
          src.map((srcLink, index) => <source key={index} src={srcLink} />)
        ) : (
          <source src={src} />
        )}
      </audio>
      <Grid
        container={true}
        spacing={3}
        component={Paper}
        alignItems="center"
        className={cx(
          classes.root,
          classes[`elevation${elevation}`],
          {
            [classes.rounded]: !rounded
          },
          classNames.root
        )}
      >
        <Grid item={true} className={classes.commonContainer}>
          {state.player.status === PLAYER.STATUS.PAUSE ? (
            <PlayCircleFilledWhite
              fontSize="large"
              onClick={playAudioInternal}
              className={cx(classes.playCircleIcon, classNames.playIcon)}
            />
          ) : (
            <PauseCircleFilled fontSize="large" onClick={pauseAudioInternal} />
          )}
        </Grid>
        {download && downloadOptions}
        <Grid
          item={true}
          className={cx(classes.commonContainer, classes.volumeIconContainer)}
          onMouseEnter={toggleVolumeSlider(true)}
          onMouseLeave={toggleVolumeSlider(false)}
        >
          <VolumeUp
            fontSize="large"
            className={cx(classes.voluemeUpIcon, classNames.volumeIcon)}
          />
          {volumeSlider && (
            <Paper className={cx(classes.volumeControlContainer)}>
              <Slider
                orientation="vertical"
                aria-labelledby="volume-control"
                className={cx(classes.slider, classNames.volumeSlider)}
              />
            </Paper>
          )}
        </Grid>
        <Grid item={true} className={classes.commonContainer}>
          <Typography>00:00</Typography>
        </Grid>
        <Grid item={true} className={classes.sliderContainer}>
          <Slider className={cx(classes.slider, classNames.mainSlider)} />
        </Grid>
        <Grid item={true} className={classes.commonContainer}>
          <Typography>00:00</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AudioPlayer;
