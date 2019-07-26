import * as React from 'react';
import { App } from '../src/index';
import { storiesOf } from '@storybook/react';
storiesOf("TypeScript and Storybook", module)
  .add('Sample Widget', () => <App/>);