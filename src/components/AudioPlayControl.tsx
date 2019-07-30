import {
  PauseCircleFilled,
  PlayCircleFilledWhite,
  Replay
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import cx from 'classnames';
import * as React from 'react';
import PLAYER from './state/player';

interface IAudioPlayControlProps {
  playerStatus: string;
  mainColor: string;
  pauseAudio: () => void;
  playAudio: () => void;
  replayAudio: () => void;
  classNames: any;
}

export const useComponentStyles = makeStyles({
  icon: (props: any) => ({
    color: props.mainColor
  })
});

const AudioPlayControl: React.FunctionComponent<IAudioPlayControlProps> = ({
  playerStatus,
  mainColor,
  pauseAudio,
  playAudio,
  replayAudio,
  classNames
}) => {
  const classes = useComponentStyles({ mainColor });
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

export default AudioPlayControl;
