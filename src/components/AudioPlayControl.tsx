import * as React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import PauseCircleFilled from '@mui/icons-material/PauseCircleFilled';
import PlayCircleFilledWhite from '@mui/icons-material/PlayCircleFilledWhite';
import Replay from '@mui/icons-material/Replay';
import cx from 'classnames';

import { IAudioPlayerColors, Icons } from './AudioPlayer';
import PLAYER from './state/player';

export const useComponentStyles = makeStyles({
  icon: (props: any) => ({
    color: props.playerColors.active,
    '&:hover': {
      color: props.playerColors.hover,
    },
  }),
});

interface IAudioPlayControlProps {
  playerStatus: string;
  playerColors: IAudioPlayerColors;
  pauseAudio: () => void;
  playAudio: () => void;
  replayAudio: () => void;
  icons?: Icons;
  classNames?: any;
}

const AudioPlayControl: React.FunctionComponent<IAudioPlayControlProps> = ({
  playerStatus,
  playerColors,
  pauseAudio,
  playAudio,
  replayAudio,
  icons = {},
  classNames = {},
}) => {
  const {
    PlayIcon = PlayCircleFilledWhite,
    ReplayIcon = Replay,
    PauseIcon = PauseCircleFilled,
  } = icons;
  const classes = useComponentStyles({ playerColors });
  switch (playerStatus) {
    case PLAYER.STATUS.PLAY:
      return (
        <PauseIcon
          fontSize="large"
          onClick={pauseAudio}
          className={cx(classes.icon, classNames.pauseIcon)}
        />
      );
    case PLAYER.STATUS.STOP:
      return (
        <ReplayIcon
          fontSize="large"
          onClick={replayAudio}
          className={cx(classes.icon, classNames.replayIcon)}
        />
      );
    default:
      return (
        <PlayIcon
          fontSize="large"
          onClick={playAudio}
          className={cx(classes.icon, classNames.playIcon)}
        />
      );
  }
};

export default React.memo(AudioPlayControl);
