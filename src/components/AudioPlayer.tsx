import { Grid } from '@material-ui/core';
import * as React from 'react';

interface IAudioPlayerProps {
  src: string;
}

function AudioPlayer({ src }: IAudioPlayerProps) {
  return (
    <>
      <audio
      // ref={node => (this.player = node)}
      >
        <source src={src} />
      </audio>
      <Grid>Audio player</Grid>
    </>
  );
}

export default AudioPlayer;
