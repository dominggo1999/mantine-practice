import React from 'react';
// @ts-ignore
import Istoria from 'istoria';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

const stories = import.meta.glob(['../../**/*.stories.{js,jsx,ts,tsx}', '../../**/stories.{js,jsx,ts,tsx}'], { eager: true });

const Wrapper = ({ children }: { children: React.ReactElement }) => {
  return (
    <BrowserRouter>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
          globalStyles: (theme) => ({
            body: {
              backgroundColor: theme.colorScheme === 'light' ? '#F7FAFC' : theme.colors.dark,
            },
          }),
        }}
      >
        {children}
      </MantineProvider>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <Istoria.Sandbox
      stories={stories}
      wrapper={Wrapper}
    />
  );
};

export default App;
