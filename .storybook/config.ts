import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    brandTitle: 'material-ui-audio-player',
    theme: themes.light
  }
});

addDecorator(withA11y);

addDecorator(
  withInfo({
    styles: {
      infoStory: {
        minHeight: '100px',
        paddingLeft: '55px'
      }
    },
    inline: true,
    source: false
  })
);

const req = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
