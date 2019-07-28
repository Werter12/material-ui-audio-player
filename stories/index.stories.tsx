import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { App } from '../src/index';
storiesOf('Material Ui', module).add('AudioPlayer', () => <App />, {
  info: {
    text: `
### Notes

light button seen on <https://zpl.io/aM49ZBd>

### Usage
~~~js
<App
  label={text('label', 'Enroll')}
  disabled={boolean('disabled',false)}
  onClick={() => alert('hello there')}
/>
~~~

`
  }
});
