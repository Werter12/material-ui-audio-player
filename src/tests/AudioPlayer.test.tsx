import { createTheme, adaptV4Theme } from '@mui/material';
import { shallow } from 'enzyme';
import * as React from 'react';
import AudioPlayer from '../components/AudioPlayer';
import { mountWithTheme } from '../components/utils/enzymeHelpers';

const theme = createTheme(adaptV4Theme({}));
describe('<AudioPlayer />', () => {
  const src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
  it('renders', () => {
    const wrapper = mountWithTheme(<AudioPlayer src={src} />, theme);
    expect(wrapper.exists()).toBeTruthy();
  });
});
