# Material UI Audio Player

Audio player for material ui design developed with react.js.

## Base

Just add your audio link to `src` and your ready to go.

```javascript
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const muiTheme = createMuiTheme({});

<ThemeProvider theme={muiTheme}>
  <AudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
</ThemeProvider>;
```

## Available props

A bunch of props will help to customize component.

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

### `useStyles`

The attribute for customizing component styles. Accept the result of
`makeStyles` function.

- _type:_ `func`
