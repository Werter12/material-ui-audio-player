import {
  Grid,
  Paper,
  Slider,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
// tslint:disable-next-line
import { StylesHook } from '@material-ui/styles/makeStyles';
import cx from 'classnames';
import * as React from 'react';
import AudioDownloadsControl from './AudioDownloadsControl';
import AudioPlayControl from './AudioPlayControl';
import AudioVolumeControl from './AudioVolumeControl';
import { actionCreators } from './state/actions';
import { getFormattedTime, populateDispatch } from './state/helpers';
import PLAYER from './state/player';
import reducer from './state/reducer';

const inititalState = {
  player: {
    status: PLAYER.STATUS.PAUSE,
    volume: {
      status: PLAYER.VOLUME.STATUS.UNMUTE,
      value: PLAYER.VOLUME.DEFAULT_VALUE
    },
    duration: 0,
    progress: 0,
    current: 0,
    autoplay: false
  }
};

export interface IAudioPlayerClassNameProps {
  root: string;
  playIcon: any;
  volumeIcon: string;
  muteIcon: string;
  mainSlider: string;
  volumeSlider: string;
  downloadIcon: string;
  pauseIcon: string;
  // loopIcon: string;
  // muteIcon: string;
  // slider: string;
  // track: string;
  // thumb: string;
  // text: string;
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
    icon: (props: any) => ({
      color: props.mainColor
    }),
    rounded: {
      borderRadius: theme.shape.borderRadius
    },
    ...elevations
  };
});

enum AudioPlayerVariation {
  primary = 'primary',
  secondary = 'secondary',
  classic = 'classic'
}

enum AudioPlayerPreload {
  auto = 'auto',
  metadata = 'metadata',
  none = 'none'
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
  preload?: AudioPlayerPreload;
  // some browsers will block audio autoplay
  autoplay?: boolean;
}

const AudioPlayer: React.FunctionComponent<IAudioPlayerProps> = ({
  src,
  rounded = true,
  elevation = 1,
  useStyles = () => ({}),
  width = '100%',
  height = 'auto',
  variation = AudioPlayerVariation.primary,
  preload = AudioPlayerPreload.auto,
  download = false,
  autoplay = false
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

  const [state, dispatch] = React.useReducer(reducer, inititalState);
  const {
    _pauseAudio,
    _playAudio,
    _muteAudio,
    _unmuteAudio,
    _changeAudioVolume,
    _setPlayerDuration,
    _setPlayerTime,
    _changePlayerSlider,
    _audioEnded,
    _replayAudio,
    _setPlayerAutoplay
  } = React.useMemo(() => {
    return populateDispatch(dispatch, player, ...actionCreators);
  }, [dispatch, player, ...actionCreators]);

  const handleAudioSliderChange = (event: object, progress: any) => {
    _changePlayerSlider(progress);
  };
  React.useEffect(() => {
    if (player && player.current) {
      if (player.current.readyState > 3) {
        _setPlayerDuration();
      }
      if (!player.current.autoplay && autoplay) {
        _setPlayerAutoplay();
      }
      player.current.addEventListener('canplay', _setPlayerDuration);
      player.current.addEventListener('timeupdate', _setPlayerTime);
      player.current.addEventListener('ended', _audioEnded);
    }
    return () => {
      if (player && player.current) {
        player.current.removeEventListener('canplay', _setPlayerDuration);

        player.current.removeEventListener('timeupdate', _setPlayerTime);
        player.current.removeEventListener('ended', _audioEnded);
      }
    };
  }, [player]);
  // tslint:disable-next-line
  console.log('state', state);
  return (
    <>
      <audio ref={player} hidden={true} preload={preload}>
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
          <AudioPlayControl
            classNames={classNames}
            playerStatus={state.player.status}
            mainColor={mainColor}
            replayAudio={_replayAudio}
            pauseAudio={_pauseAudio}
            playAudio={_playAudio}
          />
        </Grid>
        {download && <AudioDownloadsControl src={src} mainColor={mainColor} />}
        <AudioVolumeControl
          muteAudio={_muteAudio}
          unmuteAudio={_unmuteAudio}
          classNames={classNames}
          changeAudioVolume={_changeAudioVolume}
          volume={state.player.volume}
          mainColor={mainColor}
        />
        <Grid item={true} className={classes.commonContainer}>
          <Typography>{getFormattedTime(state.player.current)}</Typography>
        </Grid>
        <Grid item={true} className={classes.sliderContainer}>
          <Slider
            className={cx(classes.slider, classNames.mainSlider)}
            onChange={handleAudioSliderChange}
            value={state.player.progress}
          />
        </Grid>
        <Grid item={true} className={classes.commonContainer}>
          <Typography>{getFormattedTime(state.player.duration)}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AudioPlayer;
