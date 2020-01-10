import { ThemeProvider } from '@material-ui/core/styles';
import { mount } from 'enzyme';
import * as React from 'react';

const getThemeProviderWrappingComponent = customTheme => ({ children }) => (
  <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
);

export const mountWithTheme = (component: JSX.Element, theme: object) => {
  const wrapper = mount(component, {
    wrappingComponent: getThemeProviderWrappingComponent(theme)
  });

  return wrapper;
};
