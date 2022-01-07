import { createTheme, adaptV4Theme } from '@mui/material';
// tslint:disable-next-line
import { createShallow } from '@mui/material/test-utils';
import { mount } from 'enzyme';
import * as React from 'react';
import AudioDownloadsControl from '../components/AudioDownloadsControl';
import { AudioPlayerVariation, getColors } from '../components/AudioPlayer';

describe('<AudioDownloadsControl />', () => {
  const muiShallow = createShallow({ untilSelector: 'AudioDownloadsControl' });
  const muiTheme = createTheme(adaptV4Theme({}));
  const playerColors = getColors(muiTheme, AudioPlayerVariation.default);
  const src = 'https://example';
  const srcSet = ['https://example/music1.mp3', 'https://example/music1.waw'];
  it('renders', () => {
    const wrapper = muiShallow(
      <AudioDownloadsControl playerColors={playerColors} src={src} />
    );
    expect(wrapper.exists()).toBeTruthy();
  });

  it('dropdown of audio downloads exists', () => {
    const wrapper = mount(
      <AudioDownloadsControl playerColors={playerColors} src={srcSet} />
    );
    const rootGrid = wrapper.find('.MuiGrid-root');
    expect(rootGrid).toHaveLength(1);
    rootGrid.simulate('mouseenter');
    const dropdown = wrapper.find('p.MuiTypography-root');

    expect(dropdown.first().text()).toEqual('MP3');
    expect(dropdown.last().text()).toEqual('WAW');
  });
  it("don't display dropdown on mobile", () => {
    const wrapper = mount(
      <AudioDownloadsControl playerColors={playerColors} src={src} />
    );
    const rootGrid = wrapper.find('.MuiGrid-root');
    expect(rootGrid).toHaveLength(1);
    rootGrid.simulate('mouseenter');
    const dropdown = wrapper.find('p.MuiTypography-root');

    expect(dropdown).toHaveLength(0);
  });
});
