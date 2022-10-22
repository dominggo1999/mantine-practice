import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

const ContextWrapper = ({ children }: { children: React.ReactElement }) => {
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

export default ContextWrapper;
