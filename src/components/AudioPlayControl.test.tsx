import {
  PauseCircleFilled,
  PlayCircleFilledWhite,
  Replay
} from '@material-ui/icons';
import { shallow } from 'enzyme';
import * as React from 'react';
import AudioPlayControl from './AudioPlayControl';
import PLAYER from './state/player';

describe('AudioPlayControl component', () => {
  const mainColor = 'green';
  it('renders', () => {
    const pauseAudioMock = jest.fn();
    const playAudioMock = jest.fn();
    const replayAudioMock = jest.fn();
    const wrapper = shallow(
      <AudioPlayControl
        playerStatus={PLAYER.STATUS.PAUSE}
        pauseAudio={pauseAudioMock}
        playAudio={playAudioMock}
        replayAudio={replayAudioMock}
        mainColor={mainColor}
      />
    );
    expect(wrapper.exists()).toBeTruthy();
  });
  it('should render Play icon and play audio', () => {
    const pauseAudioMock = jest.fn();
    const playAudioMock = jest.fn();
    const replayAudioMock = jest.fn();
    const wrapper = shallow(
      <AudioPlayControl
        playerStatus={PLAYER.STATUS.PAUSE}
        pauseAudio={pauseAudioMock}
        playAudio={playAudioMock}
        replayAudio={replayAudioMock}
        mainColor={mainColor}
      />
    );
    wrapper.simulate('click');
    expect(wrapper.find(PlayCircleFilledWhite)).toHaveLength(1);
    expect(playAudioMock.mock.calls.length).toBe(1);
  });
  it('should render Pause icon and pause audio', () => {
    const pauseAudioMock = jest.fn();
    const playAudioMock = jest.fn();
    const replayAudioMock = jest.fn();
    const wrapper = shallow(
      <AudioPlayControl
        playerStatus={PLAYER.STATUS.PLAY}
        pauseAudio={pauseAudioMock}
        playAudio={playAudioMock}
        replayAudio={replayAudioMock}
        mainColor={mainColor}
      />
    );
    wrapper.simulate('click');
    expect(wrapper.find(PauseCircleFilled)).toHaveLength(1);
    expect(pauseAudioMock.mock.calls.length).toBe(1);
  });
  it('should render Replay icon and replay audio', () => {
    const pauseAudioMock = jest.fn();
    const playAudioMock = jest.fn();
    const replayAudioMock = jest.fn();
    const wrapper = shallow(
      <AudioPlayControl
        playerStatus={PLAYER.STATUS.STOP}
        pauseAudio={pauseAudioMock}
        playAudio={playAudioMock}
        replayAudio={replayAudioMock}
        mainColor={mainColor}
      />
    );
    wrapper.simulate('click');
    expect(wrapper.find(Replay)).toHaveLength(1);
    expect(replayAudioMock.mock.calls.length).toBe(1);
  });
});
