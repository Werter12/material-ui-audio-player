import { Grid, Paper, Slider } from '@material-ui/core';
import { PlayCircleFilledWhite, VolumeOff, VolumeUp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import cx from 'classnames';
import * as React from 'react';

export interface IAudioPlayerClassNameProps {
  root: string;
  // loopIcon: string;
  // playIcon: string;
  // muteIcon: string;
  // slider: string;
  // track: string;
  // thumb: string;
  // text: string;
}

interface IAudioPlayerProps {
  src: string;
  rounded?: boolean;
  elevation?: number;
  classNames?: Partial<IAudioPlayerClassNameProps>;
  width?: string;
  height?: string;
}

export const useStyles = makeStyles((theme: any) => {
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
    iconContainer: {
      flex: '0 0 auto'
    },
    volumeIconContainer: {
      position: 'relative',
      '&:hover': {
        cursor: 'pointer'
      }
    },
    volumeControlContainer: {
      position: 'absolute',

      height: '60px',
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
  classNames = {},
  width = '100%',
  height = 'auto'
}) => {
  const componentStyles = { width, height };
  const player = React.useRef<HTMLAudioElement | null>(null);
  const classes = useStyles(componentStyles);
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
          <PlayCircleFilledWhite fontSize="large" />
        </Grid>
        <Grid
          item={true}
          className={cx(classes.iconContainer, classes.volumeIconContainer)}
          onMouseEnter={toggleVolumeSlider(true)}
          onMouseLeave={toggleVolumeSlider(false)}
        >
          <VolumeUp fontSize="large" />
          {volumeSlider && (
            <Paper className={cx(classes.volumeControlContainer)}>
              <Slider orientation="vertical" aria-labelledby="volume-control" />
            </Paper>
          )}
        </Grid>
        <Grid item={true} className={classes.sliderContainer}>
          <Slider />
        </Grid>
      </Grid>
    </>
  );
};

export default AudioPlayer;
