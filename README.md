# Material UI Audio Player

Audio player for material ui design developed with react.js.

## Base

Just add your `src` and your ready to go

```javascript
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const muiTheme = createMuiTheme({});

<ThemeProvider theme={muiTheme}>
  <AudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
</ThemeProvider>;
```

## Available props

A bunch of props will help to customize component

```javascript
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const muiTheme = createMuiTheme({});

const src = [
  'https://converter-audio-example-1.s3.eu-central-1.amazonaws.com/Russell%2C%2BMale%2B-%2BEnglish%2C%2BAustralian+(1)+(online-audio-converter.com).wav',
  'https://converter-audio-examples.s3.eu-central-1.amazonaws.com/Russell%2C+Male+-+English%2C+Australian.mp3'
];

<ThemeProvider theme={muiTheme}>
  <AudioPlayer
    elevation={1}
    width="100%"
    variation="primary"
    spacing={3}
    download={true}
    autoplay={true}
    order="standart"
    loop={true}
    src={src}
  />
</ThemeProvider>;
```

### `width`

Corresponds to style property `width`

- _default:_ `100%`
