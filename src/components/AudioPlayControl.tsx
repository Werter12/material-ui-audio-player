import { makeStyles } from '@material-ui/core';
import {
  PauseCircleFilled,
  PlayCircleFilledWhite,
  Replay
} from '@material-ui/icons';
import cx from 'classnames';
import * as React from 'react';
import { IAudioPlayerColors } from './AudioPlayer';
import PLAYER from './state/player';

export const useComponentStyles = makeStyles({
  icon: (props: any) => ({
    color: props.playerColors.active,
    '&:hover': {
      color: props.playerColors.hover
    }
  })
});

interface IAudioPlayControlProps {
  playerStatus: string;
  playerColors: IAudioPlayerColors;
  pauseAudio: () => void;
  playAudio: () => void;
  replayAudio: () => void;
  classNames?: any;
}

const AudioPlayControl: React.FunctionComponent<IAudioPlayControlProps> = ({
  playerStatus,
  playerColors,
  pauseAudio,
  playAudio,
  replayAudio,
  classNames = {}
}) => {
  const classes = useComponentStyles({ playerColors });
  switch (playerStatus) {
    case PLAYER.STATUS.PLAY:
      return (
        <PauseCircleFilled
          fontSize="large"
          onClick={pauseAudio}
          className={cx(classes.icon, classNames.pauseIcon)}
        />
      );
    case PLAYER.STATUS.STOP:
      return (
        <Replay
          fontSize="large"
          onClick={replayAudio}
          className={cx(classes.icon, classNames.replayIcon)}
        />
      );
    default:
      return (
        <PlayCircleFilledWhite
          fontSize="large"
          onClick={playAudio}
          className={cx(classes.icon, classNames.playIcon)}
        />
      );
  }
};

export default React.memo(AudioPlayControl);
