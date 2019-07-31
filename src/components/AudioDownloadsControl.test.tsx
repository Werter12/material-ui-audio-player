// tslint:disable-next-line
import { createShallow } from '@material-ui/core/test-utils';
import { mount } from 'enzyme';
import * as React from 'react';
import AudioDownloadsControl from './AudioDownloadsControl';

describe('<AudioDownloadsControl />', () => {
  const mainColor = 'green';
  const muiShallow = createShallow({ untilSelector: 'AudioDownloadsControl' });
  const src = 'https://example';
  const srcSet = ['https://example/music1.mp3', 'https://example/music1.waw'];
  it('renders', () => {
    const wrapper = muiShallow(
      <AudioDownloadsControl mainColor={mainColor} src={src} />
    );
    expect(wrapper.exists()).toBeTruthy();
  });

  it('dropdown of audio downloads exists', () => {
    const wrapper = mount(
      <AudioDownloadsControl mainColor={mainColor} src={srcSet} />
    );
    const rootGrid = wrapper.find('.MuiGrid-root');
    expect(rootGrid).toHaveLength(1);
    rootGrid.simulate('mouseenter');
    const dropdown = wrapper.find('p.MuiTypography-root');

    expect(dropdown.first().text()).toEqual('MP3');
    expect(dropdown.last().text()).toEqual('WAW');
  });
});
