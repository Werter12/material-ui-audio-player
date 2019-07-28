import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { shallow } from 'enzyme';
import * as React from 'react';
import AudioPlayer from './AudioPlayer';

const theme = createMuiTheme({});
describe('AudioPlayer component', () => {
  it('renders', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <AudioPlayer src="https://converter-audio-examples.s3.eu-central-1.amazonaws.com/Russell%2C+Male+-+English%2C+Australian.mp3" />{' '}
        />
      </ThemeProvider>
    );
    expect(component.exists()).toBeTruthy();
  });
});
