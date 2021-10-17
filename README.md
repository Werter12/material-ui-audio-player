# Material UI Audio Player

[![NPM version](https://img.shields.io/npm/v/material-ui-audio-player.svg?style=flat)](https://www.npmjs.org/package/material-ui-audio-player)
[![Build Status](https://travis-ci.com/Werter12/material-ui-audio-player.svg?branch=master)](https://travis-ci.com/github/Werter12/material-ui-audio-player)
[![Package Size](https://img.shields.io/bundlephobia/min/material-ui-audio-player)](https://img.shields.io/bundlephobia/min/material-ui-audio-player)

Audio player for material ui design developed with react.js. Requires Material UI 4 version.

_Demo:_ https://werter12.github.io/material-ui-audio-player/

## Base

Just add your audio link to `src` and your ready to go.

```javascript
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';

const muiTheme = createMuiTheme({});

<ThemeProvider theme={muiTheme}>
  <AudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
</ThemeProvider>;
```

## Available props

A bunch of props will help to customize component.

```javascript
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';

const muiTheme = createMuiTheme({});

const src = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.wav',
];

<ThemeProvider theme={muiTheme}>
  <AudioPlayer
    elevation={1}
    width="100%"
    variation="default"
    spacing={3}
    download={true}
    autoplay={true}
    order="standart"
    preload="auto"
    loop={true}
    src={src}
  />
</ThemeProvider>;
```

### `src`

Could accept audio link or array of audio links.

- _type:_ `string` | `array`
- _required_

### `width`

Corresponds to style property `width`.

- _default:_ `100%`
- _type:_ `string`

### `variation`

Component view variation.

- _default:_ `default`
- _options:_ `default`, `primary`, `secondary`
- _type:_ `string`

### `download`

Display download button (icon) with dropdown of available audio tracks for download.

- _default:_ `false`
- _type:_ `boolean`

### `volume`

Display volume control button (icon).

- _default:_ `true`
- _type:_ `boolean`

### `autoplay`

Corresponds to HTML audio `autoplay` attribute.

- _default:_ `false`
- _type:_ `boolean`

### `elevation`

Shadow depth. Corresponds to `elevation` prop of `Material Ui` `Paper` component.

- _default:_ `1`
- _type:_ `number`

### `rounded`

Rounded corners of the container. Corresponds to `square` prop of `Material Ui` `Paper` component.

- _default:_ `false`
- _type:_ `boolean`

### `spacing`

Spacing for root `Grid` container. Corresponds to `spacing` prop of `Material Ui` `Grid` component.

- _default:_ `3` (`2` - mobile)
- _type:_ `number`

### `order`

Order of `Slider` and controls buttons.

- _default:_ `standart`
- _options:_ `standart`, `reverse`
- _type:_ `string`

### `loop`

Display loop button.

- _default:_ `false`
- _type:_ `boolean`

### `preload`

Corresponds to HTML audio attribute `preload`.

- _default:_ `auto`
- _type:_ `string`

### `onPlayed`

This callback triggers when the player started play after pause or initial state

- _type:_ `func`

### `onPaused`

This callback triggers when the player paused after the play

- _type:_ `func`

### `onFinished`

This callback triggers when the player finish playing

- _type:_ `func`

### `onClose`

This callback triggers when you close the player with help of the close button `displayCloseButton`

- _type:_ `func`

### `time`

This prop helps to customize time displaying. `double` - means that two timers will be present. `single` - only one.

- _default:_ `double`
- _options:_ `double`, `single`
- _type:_ `string`

### `timePosition`

This prop helps to position `single` timer before (`start`) or after (`end`) the slider.

- _default:_ `start`
- _options:_ `start`, `end`
- _type:_ `string`

### `useStyles`

The attribute for customizing component styles. Accept the result of
`makeStyles` function.

- _type:_ `func`

### `icons`

Provide custom icon component from Material-ui icons for specific icon.

- _type:_ `object`
- _default:_

```
  const icons = {
    PlayIcon: PlayCircleFilledWhite,
    ReplayIcon: Replay,
    PauseIcon: PauseCircleFilled,
    VolumeUpIcon: VolumeUp,
    VolumeOffIcon: VolumeOff,
    CloseIcon: Close,
  }
```

### `displaySlider`

Display slider with time.

- _default:_ `true`
- _type:_ `boolean`

### `displayCloseButton`

Display close button (icon).

- _default:_ `false`
- _type:_ `boolean`

### `muted`

Prop for controling mute state of the audio and volume button. (By default is null. When any boolean passed, the mute state for button and audio will be completly controlled from external source)

- _default:_ `null`
- _options:_ `true`, `false`
- _type:_ `boolean`

### `getPlayer`

Callback for getting access to HTML audio player instance and `dispatch` react function (from `useReducer`) in order to change player's state directly (programmatically). Check out `Controlled AudioPlayer` section in the storybook.

- _type:_ `func`
-  function_params:_ `player`, `dispatch`

## Customize component styles

```javascript
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';

const muiTheme = createMuiTheme({});

const useStyles = makeStyles((theme) => {
  return {
    root: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    loopIcon: {
      color: '#3f51b5',
      '&.selected': {
        color: '#0921a9',
      },
      '&:hover': {
        color: '#7986cb',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    playIcon: {
      color: '#f50057',
      '&:hover': {
        color: '#ff4081',
      },
    },
    replayIcon: {
      color: '#e6e600',
    },
    pauseIcon: {
      color: '#0099ff',
    },
    volumeIcon: {
      color: 'rgba(0, 0, 0, 0.54)',
    },
    volumeSlider: {
      color: 'black',
    },
    progressTime: {
      color: 'rgba(0, 0, 0, 0.54)',
    },
    mainSlider: {
      color: '#3f51b5',
      '& .MuiSlider-rail': {
        color: '#7986cb',
      },
      '& .MuiSlider-track': {
        color: '#3f51b5',
      },
      '& .MuiSlider-thumb': {
        color: '#303f9f',
      },
    },
  };
});

<ThemeProvider theme={muiTheme}>
  <AudioPlayer
    width="500px"
    useStyles={useStyles}
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    loop={true}
  />
</ThemeProvider>;
```

### Available classes

- root
- playIcon
- replayIcon
- pauseIcon
- volumeIcon
- muteIcon
- mainSlider
- volumeSliderContainer
- volumeSlider
- downloadsIcon
- pauseIcon
- loopIcon
- progressTime
- downloadsContainer
- downloadsItemLink
- downloadsItemText
