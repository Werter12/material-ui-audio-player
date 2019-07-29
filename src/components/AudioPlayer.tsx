import { Grid, Paper, Slider, useMediaQuery } from '@material-ui/core';
import { PlayCircleFilledWhite, VolumeOff, VolumeUp } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/styles';
// tslint:disable-next-line
import { StylesHook } from '@material-ui/styles/makeStyles';
import cx from 'classnames';
import * as React from 'react';

export interface IAudioPlayerClassNameProps {
  root: string;
  playIcon: any;
  volumeIcon: string;
  muteIcon: string;
  mainSlider: string;
  volumeSlider: string;
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
  src: string;
  rounded?: boolean;
  elevation?: number;
  useStyles?: StylesHook<any>;
  width?: string;
  height?: string;
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
    iconContainer: {
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
  variation = 'primary'
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
  return (
    <>
      <audio ref={player} hidden={true}>
        <source src={src} />
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
        <Grid item={true} className={classes.iconContainer}>
          <PlayCircleFilledWhite
            fontSize="large"
            className={cx(classes.playCircleIcon, classNames.playIcon)}
          />
        </Grid>
        <Grid
          item={true}
          className={cx(classes.iconContainer, classes.volumeIconContainer)}
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
        <Grid item={true} className={classes.sliderContainer}>
          <Slider className={cx(classes.slider, classNames.mainSlider)} />
        </Grid>
      </Grid>
    </>
  );
};

export default AudioPlayer;
