import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { AudioPlayer } from '../src';

const theme = createMuiTheme({});

storiesOf('Material Ui', module)
  .add(
    'AudioPlayer',
    () => {
      return (
        <ThemeProvider theme={theme}>
          <AudioPlayer
            width="900px"
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
  .add('AudioPlayer Responsive', () => {
    return (
      <ThemeProvider theme={theme}>
        <AudioPlayer src="https://converter-audio-examples.s3.eu-central-1.amazonaws.com/Russell%2C+Male+-+English%2C+Australian.mp3" />
      </ThemeProvider>
    );
  });
