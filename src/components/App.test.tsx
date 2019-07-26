import { shallow } from 'enzyme';
import * as React from 'react';
import App from './App';

it('App renders', () => {
  const component = shallow(<App />);

  expect(component.exists()).toBeTruthy();
});
