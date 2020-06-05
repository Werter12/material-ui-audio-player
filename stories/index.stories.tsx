import {
  createMuiTheme,
  makeStyles,
  GridSpacing,
  ThemeProvider,
} from '@material-ui/core';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import AudioPlayer, {
  AudioPlayerVariation,
  AudioPlayerComponentsOrder,
} from '../src/components/AudioPlayer';

const muiTheme = createMuiTheme({});

const availableVariations = {
  primary: 'primary',
  secondary: 'secondary',
  default: 'default',
};

const availableOrder = {
  standart: 'standart',
  reverse: 'reverse',
};

const gridSpacing: GridSpacing[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

storiesOf('Material Ui', module)
  .add(
    'AudioPlayer Interactive',
    () => {
      const singleSrc =
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
      const srcSet = [
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      ];
      const srcOptions = {
        'src set': srcSet,
        'single src': singleSrc,
      };
      const src = select('source', srcOptions, srcSet);
      const width = text('width', '500px');
      const variation = select<AudioPlayerVariation>(
        'variation',
        availableVariations,
        AudioPlayerVariation.primary
      );
      const order = select<AudioPlayerComponentsOrder>(
        'order',
        availableOrder,
        AudioPlayerComponentsOrder.standart
      );
      const elevation = number('elevation', 1);
      const spacing = select<GridSpacing>('spacing', gridSpacing, 3);
      const download = boolean('download', true);
      const debug = boolean('debug', true);
      const loop = boolean('loop', true);

      return (
        <ThemeProvider theme={muiTheme}>
          <AudioPlayer
            elevation={elevation}
            width={width}
            variation={variation}
            download={download}
            loop={loop}
            order={order}
            spacing={spacing}
            debug={debug}
            src={src}
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
`,
      },
    }
  )
  .add(
    'AudioPlayer Custom styles',
    () => {
      const useStyles = makeStyles((theme: any) => {
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
      const src =
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
      return (
        <ThemeProvider theme={muiTheme}>
          <AudioPlayer
            width="500px"
            useStyles={useStyles}
            src={src}
            loop={true}
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
const useStyles = makeStyles(
  (theme: any) => {
    return {
      root: {
        [theme.breakpoints.down('sm')]: {
          width: '100%'
        },
      },
      loopIcon: {
        color: '#3f51b5',
        '&.selected': {
          color: '#0921a9'
        },
        '&:hover': {
          color: '#7986cb'
        },
        [theme.breakpoints.down('sm')]: {
          display: 'none'
        }
      },
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
    }
  });
<AudioPlayer src='https://music.com/song' useStyles={useStyles} loop={true}/>
~~~
`,
      },
    }
  )
  .add('AudioPlayer Responsive', () => {
    return (
      <ThemeProvider theme={muiTheme}>
        <AudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
      </ThemeProvider>
    );
  });
