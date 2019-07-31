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
    const component = shallow(
      <AudioPlayControl
        playerStatus={PLAYER.STATUS.PAUSE}
        pauseAudio={pauseAudioMock}
        playAudio={playAudioMock}
        replayAudio={replayAudioMock}
        mainColor={mainColor}
      />
    );
    expect(component.exists()).toBeTruthy();
  });
  it('should render Play icon', () => {
    const pauseAudioMock = jest.fn();
    const playAudioMock = jest.fn();
    const replayAudioMock = jest.fn();
    const component = shallow(
      <AudioPlayControl
        playerStatus={PLAYER.STATUS.PAUSE}
        pauseAudio={pauseAudioMock}
        playAudio={playAudioMock}
        replayAudio={replayAudioMock}
        mainColor={mainColor}
      />
    );
    component.simulate('click');
    expect(component.find(PlayCircleFilledWhite)).toHaveLength(1);
    expect(playAudioMock.mock.calls.length).toBe(1);
  });
  it('should render Pause icon', () => {
    const pauseAudioMock = jest.fn();
    const playAudioMock = jest.fn();
    const replayAudioMock = jest.fn();
    const component = shallow(
      <AudioPlayControl
        playerStatus={PLAYER.STATUS.PLAY}
        pauseAudio={pauseAudioMock}
        playAudio={playAudioMock}
        replayAudio={replayAudioMock}
        mainColor={mainColor}
      />
    );
    component.simulate('click');
    expect(component.find(PauseCircleFilled)).toHaveLength(1);
    expect(pauseAudioMock.mock.calls.length).toBe(1);
  });
  it('should render Replay icon', () => {
    const pauseAudioMock = jest.fn();
    const playAudioMock = jest.fn();
    const replayAudioMock = jest.fn();
    const component = shallow(
      <AudioPlayControl
        playerStatus={PLAYER.STATUS.STOP}
        pauseAudio={pauseAudioMock}
        playAudio={playAudioMock}
        replayAudio={replayAudioMock}
        mainColor={mainColor}
      />
    );
    component.simulate('click');
    expect(component.find(Replay)).toHaveLength(1);
    expect(replayAudioMock.mock.calls.length).toBe(1);
  });
});
