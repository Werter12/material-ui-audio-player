import { createMuiTheme } from '@material-ui/core';
import { shallow } from 'enzyme';
import * as React from 'react';
import AudioPlayer from './AudioPlayer';
import { mountWithTheme } from './utils/enzymeHelpers';

const theme = createMuiTheme({});
describe('<AudioPlayer />', () => {
  const src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
  it('renders', () => {
    const wrapper = mountWithTheme(<AudioPlayer src={src} />, theme);
    expect(wrapper.exists()).toBeTruthy();
  });
});
