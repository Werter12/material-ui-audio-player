import { Grid, Paper, Slider } from '@material-ui/core';
import { PlayCircleFilledWhite, VolumeOff, VolumeUp } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
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
  classes: any;
  rounded?: boolean;
  elevation?: number;
  classNames?: Partial<IAudioPlayerClassNameProps>;
}

export const styles = (theme: any) => {
  const elevations = {};
  theme.shadows.forEach((shadow, index) => {
    elevations[`elevation${index}`] = {
      boxShadow: shadow
    };
  });

  return {
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create('box-shadow')
    },
    rounded: {
      borderRadius: theme.shape.borderRadius
    },
    ...elevations
  };
};

const AudioPlayer: React.FunctionComponent<IAudioPlayerProps> = ({
  src,
  classes,
  rounded = true,
  elevation = 1,
  classNames = {}
}) => {
  const player = React.useRef<HTMLAudioElement | null>(null);
  return (
    <>
      <audio ref={player}>
        <source src={src} />
      </audio>
      <Grid
        container={true}
        spacing={4}
        component={Paper}
        className={cx(
          classes.root,
          classes[`elevation${elevation}`],
          {
            [classes.rounded]: !rounded
          },
          classNames.root
        )}
      >
        <Grid item={true}>
          <PlayCircleFilledWhite />
        </Grid>
        <Grid item={true}>
          <VolumeUp />
        </Grid>
        <Grid item={true}>
          <Slider />
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles, { name: 'AudioPlayer' })(AudioPlayer);
