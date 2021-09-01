import { createMuiTheme } from '@material-ui/core';
// tslint:disable-next-line
import { createShallow } from '@material-ui/core/test-utils';
import { VolumeOff, VolumeUp } from '@material-ui/icons';
import * as React from 'react';
import { AudioPlayerVariation, getColors } from '../components/AudioPlayer';
import AudioVolumeControl from '../components/AudioVolumeControl';
import PLAYER from '../components/state/player';
import { mountWithTheme } from '../components/utils/enzymeHelpers';

describe('<AudioVolumeControl />', () => {
  const muiTheme = createMuiTheme({});
  const playerColors = getColors(muiTheme, AudioPlayerVariation.default);
  const muiShallow = createShallow({ untilSelector: 'AudioVolumeControl' });
  it('renders', () => {
    const muteAudio = jest.fn();
    const unmuteAudio = jest.fn();
    const changeAudioVolume = jest.fn();
    const volume = {
      status: PLAYER.VOLUME.STATUS.UNMUTE,
      value: 100
    };
    const wrapper = mountWithTheme(
      <AudioVolumeControl
        volume={volume}
        muteAudio={muteAudio}
        unmuteAudio={unmuteAudio}
        changeAudioVolume={changeAudioVolume}
        playerColors={playerColors}
      />,
      muiTheme
    );
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render VolumeUp and able to mute audio', () => {
    const muteAudio = jest.fn();
    const unmuteAudio = jest.fn();
    const changeAudioVolume = jest.fn();
    const volume = {
      status: PLAYER.VOLUME.STATUS.UNMUTE,
      value: 100
    };
    const wrapper = muiShallow(
      <AudioVolumeControl
        volume={volume}
        muteAudio={muteAudio}
        unmuteAudio={unmuteAudio}
        changeAudioVolume={changeAudioVolume}
        playerColors={playerColors}
      />
    );

    const icon = wrapper.find(VolumeUp);
    expect(icon).toHaveLength(1);
    icon.simulate('click');
    expect(muteAudio.mock.calls.length).toBe(1);
  });

  it('should render VolumeOff and able to unmute audio', () => {
    const muteAudio = jest.fn();
    const unmuteAudio = jest.fn();
    const changeAudioVolume = jest.fn();
    const volume = {
      status: PLAYER.VOLUME.STATUS.MUTE,
      value: 100
    };

    const wrapper = muiShallow(
      <AudioVolumeControl
        volume={volume}
        muteAudio={muteAudio}
        unmuteAudio={unmuteAudio}
        changeAudioVolume={changeAudioVolume}
        playerColors={playerColors}
      />
    );

    const icon = wrapper.find(VolumeOff);
    expect(icon).toHaveLength(1);
    icon.simulate('click');
    expect(unmuteAudio.mock.calls.length).toBe(1);
  });

  it('should not be able to mute audio', () => {
    const muteAudio = jest.fn();
    const unmuteAudio = jest.fn();
    const changeAudioVolume = jest.fn();
    const volume = {
      status: PLAYER.VOLUME.STATUS.MUTE,
      value: 100
    };

    const wrapper = muiShallow(
      <AudioVolumeControl
        muteable={false}
        volume={volume}
        muteAudio={muteAudio}
        unmuteAudio={unmuteAudio}
        changeAudioVolume={changeAudioVolume}
        playerColors={playerColors}
      />
    );

    const icon = wrapper.find(VolumeOff);
    expect(icon).toHaveLength(1);
    icon.simulate('click');
    expect(unmuteAudio.mock.calls.length).toBe(0);
  });

  it('toggle volume slider works', () => {
    const muteAudio = jest.fn();
    const unmuteAudio = jest.fn();
    const changeAudioVolume = jest.fn();
    const volume = {
      status: PLAYER.VOLUME.STATUS.UNMUTE,
      value: 100
    };
    const wrapper = mountWithTheme(
      <AudioVolumeControl
        volume={volume}
        muteAudio={muteAudio}
        unmuteAudio={unmuteAudio}
        changeAudioVolume={changeAudioVolume}
        playerColors={playerColors}
      />,
      muiTheme
    );
    const rootGrid = wrapper.find('.MuiGrid-root');
    expect(rootGrid).toHaveLength(1);
    rootGrid.simulate('mouseenter');
    expect(wrapper.find('.MuiSlider-root')).toHaveLength(1);
    rootGrid.simulate('mouseleave');
    expect(wrapper.find('.MuiSlider-root')).toHaveLength(0);
  });
});
