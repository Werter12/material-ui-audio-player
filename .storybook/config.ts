import { withInfo } from '@storybook/addon-info';
import { addDecorator, configure } from '@storybook/react';

addDecorator(withInfo({ inline: true, header: false }));

const req = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
