import { createMuiTheme } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { object, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { AudioPlayer } from '../src';

const theme = createMuiTheme({});

const availableVariations = {
  primary: 'primary',
  secondary: 'secondary',
  classic: 'classic'
};

storiesOf('Material Ui', module)
  .add(
    'AudioPlayer Interactive',
    () => {
      const width = text('width', '500px');
      const variation = select('variation', availableVariations, 'primary');
      return (
        <ThemeProvider theme={theme}>
          <AudioPlayer
            width={width}
            variation={variation}
            src="https://converter-audio-examples.s3.eu-central-1.amazonaws.com/Russell%2C+Male+-+English%2C+Australian.mp3"
          />
        </ThemeProvider>
      );
    },
    {
      info: {
        text: `
### Notes

### Usage
~~~js
<AudioPlayer src='https://music.com/song'/>
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
          color: '#f50057'
        },
        volumeIcon: {
          color: 'rgba(0, 0, 0, 0.54)'
        }
      });
      const width = text('width', '500px');
      const variation = select('variation', availableVariations, 'primary');
      return (
        <ThemeProvider theme={theme}>
          <AudioPlayer
            width="500px"
            variation={variation}
            useStyles={useStyles}
            src="https://converter-audio-examples.s3.eu-central-1.amazonaws.com/Russell%2C+Male+-+English%2C+Australian.mp3"
          />
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
    color: '#f50057'
  },
  volumeIcon: {
    color: 'rgba(0, 0, 0, 0.54)'
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
