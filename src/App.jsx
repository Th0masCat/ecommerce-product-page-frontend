import { MantineProvider } from '@mantine/core';

import { CustomFonts } from './components/CustomFonts';
import AppShellMain from './components/AppShellMain';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <MantineProvider withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'Kumbh Sans, sans-serif',

          colors: {
            // add new theme color
            sitePrimary: ['#ff7d1a', '#ffede0'],
            siteNeutral: ['#1d2025', '#68707d', '	#b6bcc8', '#f7f8fd', '#ffffff', '#000000', '#bfbfbf'],
          },

          shadows: {
            md: '1px 1px 3px rgba(0, 0, 0, .25)',
            xl: '5px 5px 3px rgba(0, 0, 0, .25)',
          },

          headings: {
            fontFamily: 'Roboto, sans-serif',
            sizes: {
              h1: { fontSize: '2rem' },
            },
          },
        }}>

        <CustomFonts />
        <AppShellMain />
      </MantineProvider>
    </RecoilRoot>
  );
}