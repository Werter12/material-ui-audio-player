import { withInfo } from '@storybook/addon-info';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    brandTitle: 'material-ui-audio-player',
    theme: themes.light
  }
});

addDecorator(
  withInfo({
    styles: {
      header: {
        h1: {
          marginRight: '20px',
          fontSize: '25px',
          margin: '0px -8px',
          padding: '0px 8px',
          display: 'inline'
        },
        body: {
          paddingTop: 0,
          paddingBottom: 0
        },
        h2: {
          display: 'inline',
          color: '#999'
        }
      },
      infoBody: {
        backgroundColor: '#eee',
        padding: '0px 20px',
        margin: '0px -8px',
        lineHeight: '2'
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
