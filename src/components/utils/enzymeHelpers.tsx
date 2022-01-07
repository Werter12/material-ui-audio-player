import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { Theme } from '@mui/material';
import { mount } from 'enzyme';
import * as React from 'react';


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


const getThemeProviderWrappingComponent = (customTheme) => ({ children }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
  </StyledEngineProvider>
);

export const mountWithTheme = (component: JSX.Element, theme: object) => {
  const wrapper = mount(component, {
    wrappingComponent: getThemeProviderWrappingComponent(theme),
  });

  return wrapper;
};
