import {
  Grid,
  makeStyles,
  Paper,
  Slider,
  Typography,
  useMediaQuery
} from '@material-ui/core';
// tslint:disable-next-line
import { GridSpacing } from '@material-ui/core/Grid';
import { Repeat } from '@material-ui/icons';
import { useTheme } from '@material-ui/styles';
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
    loop: false,
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
  downloadsIcon: string;
  pauseIcon: string;
  loopIcon: string;
  progressTime: string;
  downloadsContainer: string;
  downloadsItemLink: string;
  downloadsItemText: string;
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
    sliderContainerWrapper: (props: any) => ({
      width: 'auto',
      flex: '1 1 auto',
      display: 'flex',
      boxSizing: 'border-box',
      order: props.componentsOrder
    }),
    sliderContainer: {
      flex: '1 1 auto'
    },
    slider: (props: any) => ({
      color: props.playerColors.active
    }),
    commonContainer: {
      flex: '0 0 auto',
      '&:hover': {
        cursor: 'pointer'
      }
    },
    iconSelected: (props: any) => ({
      color: props.playerColors.selected
    }),
    icon: (props: any) => ({
      color: props.playerColors.active,
      '&:hover': {
        color: props.playerColors.hover
      }
    }),
    rounded: {
      borderRadius: theme.shape.borderRadius
    },
    ...elevations
  };
});
enum AudioPlayerComponentsOrder {
  standart = 'standart',
  reverse = 'reverse'
}
export interface IAudioPlayerColors {
  active: string;
  selected: string;
  disabled: string;
  hover: string;
}

export const getColors = (
  theme,
  variation: AudioPlayerVariation
): IAudioPlayerColors => {
  if (variation === AudioPlayerVariation.default) {
    return {
      active: theme.palette.action.active,
      selected: theme.palette.action.selected,
      disabled: theme.palette.action.disabled,
      hover: theme.palette.action.hover
    };
  } else {
    return {
      active: theme.palette[variation].main,
      selected: theme.palette[variation].dark,
      disabled: theme.palette[variation].light,
      hover: theme.palette[variation].light
    };
  }
};

export enum AudioPlayerVariation {
  primary = 'primary',
  secondary = 'secondary',
  default = 'default'
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
  loop?: boolean;
  order?: AudioPlayerComponentsOrder;
  // some browsers will block audio autoplay
  autoplay?: boolean;
  debug?: boolean;
  spacing?: GridSpacing;
}

const AudioPlayer: React.FunctionComponent<IAudioPlayerProps> = ({
  src,
  rounded = true,
  elevation = 1,
  useStyles = () => ({}),
  width = '100%',
  height = 'auto',
  variation = AudioPlayerVariation.default,
  preload = AudioPlayerPreload.auto,
  download = false,
  autoplay = false,
  order = AudioPlayerComponentsOrder.standart,
  loop = false,
  debug = false,
  // tslint:disable-next-line
  spacing = undefined
}) => {
  const player = React.useRef<HTMLAudioElement | null>(null);
  const theme: { [key: string]: any } = useTheme();
  const playerColors: IAudioPlayerColors = getColors(theme, variation);
  const componentsOrder =
    order === AudioPlayerComponentsOrder.standart ? 'unset' : '-1';
  const componentStyles = { width, height, playerColors, componentsOrder };
  const classes = useComponentStyles(componentStyles);
  const classNames: Partial<IAudioPlayerClassNameProps> = useStyles(
    componentStyles
  );
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [state, dispatch] = React.useReducer(reducer, inititalState);
  const [
    _playAudio,
    _pauseAudio,
    _muteAudio,
    _unmuteAudio,
    _changeAudioVolume,
    _setPlayerDuration,
    _setPlayerTime,
    _audioEnded,
    _replayAudio,
    _changePlayerSlider,
    _setPlayerAutoplay,
    _loopAudio
  ] = React.useMemo(() => {
    return populateDispatch(dispatch, player, ...actionCreators);
  }, [dispatch, player, actionCreators]);
  const handleAudioSliderChange = (event: object, progress: any) => {
    _changePlayerSlider(progress);
  };
  const handlePlayerTimeUpdate = () => {
    _setPlayerTime();
  };
  React.useEffect(() => {
    if (player && player.current) {
      if (player.current.readyState > 3) {
        _setPlayerDuration();
      }
      if (!player.current.autoplay && autoplay) {
        _setPlayerAutoplay();
      }
      player.current.addEventListener('canplay', () => {
        _setPlayerDuration();
      });
      player.current.addEventListener('timeupdate', handlePlayerTimeUpdate);
      player.current.addEventListener('ended', _audioEnded);
    }
    return () => {
      if (player && player.current) {
        player.current.removeEventListener('canplay', _setPlayerDuration);

        player.current.removeEventListener(
          'timeupdate',
          handlePlayerTimeUpdate
        );
        player.current.removeEventListener('ended', _audioEnded);
      }
    };
  }, [player]);

  if (debug) {
    // tslint:disable-next-line
    console.log('state', state);
    // tslint:disable-next-line
    console.log('player', player);
  }

  const handleLoop = () => {
    _loopAudio(!state.player.loop);
  };
  const mainContainerSpacing: GridSpacing = spacing
    ? spacing
    : isMobile
    ? 2
    : 3;

  return (
    <Grid
      container={true}
      spacing={mainContainerSpacing}
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
      <audio ref={player} hidden={true} preload={preload}>
        {Array.isArray(src) ? (
          src.map((srcLink, index) => <source key={index} src={srcLink} />)
        ) : (
          <source src={src} />
        )}
      </audio>
      {loop && (
        <Grid item={true} className={classes.commonContainer}>
          <Repeat
            fontSize="large"
            onClick={handleLoop}
            className={cx(
              {
                [classes.iconSelected]: state.player.loop,
                selected: state.player.loop,
                [classes.icon]: !state.player.loop
              },
              classNames.loopIcon
            )}
          />
        </Grid>
      )}
      <Grid item={true} className={classes.commonContainer}>
        <AudioPlayControl
          classNames={classNames}
          playerStatus={state.player.status}
          playerColors={playerColors}
          replayAudio={_replayAudio}
          pauseAudio={_pauseAudio}
          playAudio={_playAudio}
        />
      </Grid>
      {download && (
        <AudioDownloadsControl src={src} playerColors={playerColors} />
      )}
      <AudioVolumeControl
        muteAudio={_muteAudio}
        unmuteAudio={_unmuteAudio}
        classNames={classNames}
        changeAudioVolume={_changeAudioVolume}
        volume={state.player.volume}
        playerColors={playerColors}
      />
      <Grid
        item={true}
        container={true}
        spacing={2}
        className={cx(classes.sliderContainerWrapper)}
      >
        <Grid item={true} className={cx(classes.commonContainer)}>
          <Typography className={classNames.progressTime}>
            {getFormattedTime(state.player.current)}
          </Typography>
        </Grid>
        <Grid item={true} className={classes.sliderContainer}>
          <Slider
            className={cx(classes.slider, classNames.mainSlider)}
            onChange={handleAudioSliderChange}
            value={state.player.progress}
          />
        </Grid>
        <Grid item={true} className={classes.commonContainer}>
          <Typography className={classNames.progressTime}>
            {getFormattedTime(state.player.duration)}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AudioPlayer;
