import { createMuiTheme } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { AudioPlayer } from '../src';

const theme = createMuiTheme({});

const availableVariations = {
  primary: 'primary',
  secondary: 'secondary',
  default: 'default'
};

const availableOrder = {
  standart: 'standart',
  reverse: 'reverse'
};

storiesOf('Material Ui', module)
  .add(
    'AudioPlayer Interactive',
    () => {
      const width = text('width', '500px');
      const variation = select(
        'variation',
        availableVariations,
        availableVariations.primary
      );
      const order = select('order', availableOrder, availableOrder.standart);
      const elevation = number('elevation', 1);
      const spacing = number('spacing', 3);
      const download = boolean('download', true);
      const debug = boolean('debug', true);
      const loop = boolean('loop', true);
      const srcSet = [
        'https://converter-audio-example-1.s3.eu-central-1.amazonaws.com/Russell%2C%2BMale%2B-%2BEnglish%2C%2BAustralian+(1)+(online-audio-converter.com).wav',
        'https://converter-audio-examples.s3.eu-central-1.amazonaws.com/Russell%2C+Male+-+English%2C+Australian.mp3'
      ];

      return (
        <ThemeProvider theme={theme}>
          <AudioPlayer
            elevation={elevation}
            width={width}
            variation={variation}
            download={download}
            loop={loop}
            order={order}
            spacing={spacing}
            debug={debug}
            src={srcSet}
          />
        </ThemeProvider>
      );
    },
    {
      info: {
        text: `
### Notes
  You could use src prop by providing link to audio or use array of links. Make sure your audios with extention. 
  It neccesary to display option in dropdown of available formats downloads.
### Usage
~~~js
const srcSet = [
  'https://converter-audio-example-1.s3.eu-central-1.amazonaws.com/Russell%2C%2BMale%2B-%2BEnglish%2C%2BAustralian+(1)+(online-audio-converter.com).wav',
  'https://converter-audio-examples.s3.eu-central-1.amazonaws.com/Russell%2C+Male+-+English%2C+Australian.mp3'
];
  <AudioPlayer
    elevation={1}
    width="500px"
    variation="primary"
    download={true}
    loop={loop}
    spacing={spacing}
    debug={false}
    src={srcSet}
  />
~~~
`
      }
    }
  )
  .add(
    'AudioPlayer Custom styles',
    () => {
      const useStyles = makeStyles({
        playIcon: {
          color: '#f50057',
          '&:hover': {
            color: '#ff4081'
          }
        },
        volumeIcon: {
          color: 'rgba(0, 0, 0, 0.54)'
        },
        volumeSlider: {
          color: 'black'
        },
        progressTime: {
          color: 'rgba(0, 0, 0, 0.54)'
        },
        mainSlider: {
          color: '#3f51b5',
          '& .MuiSlider-rail': {
            color: '#7986cb'
          },
          '& .MuiSlider-track': {
            color: '#3f51b5'
          },
          '& .MuiSlider-thumb': {
            color: '#303f9f'
          }
        }
      });
      const src =
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
      return (
        <ThemeProvider theme={theme}>
          <AudioPlayer width="500px" useStyles={useStyles} src={src} />
        </ThemeProvider>
      );
    },
    {
      info: {
        text: `
### Notes
 You should use useStyles prop for passing stylesHook
 created with makeStyles
### Usage
~~~js
const useStyles = makeStyles({
  playIcon: {
    color: '#f50057',
    '&:hover': {
      color: '#ff4081'
    }
  },
  volumeIcon: {
    color: 'rgba(0, 0, 0, 0.54)'
  },
  mainSlider: {
    color: '#3f51b5',
    '& .MuiSlider-rail': {
      color: '#7986cb'
    },
    '& .MuiSlider-track': {
      color: '#3f51b5'
    },
    '& .MuiSlider-thumb': {
      color: '#303f9f'
    }
  }
})
<AudioPlayer src='https://music.com/song' useStyles={useStyles}/>
~~~
`
      }
    }
  )
  .add('AudioPlayer Responsive', () => {
    return (
      <ThemeProvider theme={theme}>
        <AudioPlayer src="https://converter-audio-examples.s3.eu-central-1.amazonaws.com/Russell%2C+Male+-+English%2C+Australian.mp3" />
      </ThemeProvider>
    );
  });
