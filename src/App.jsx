import { Button, MantineProvider, Text } from '@mantine/core';
import Temp from './components/Temp';
import { Global } from '@emotion/react';


export default function App() {
  return (
    <MantineProvider withGlobalStyles
    withNormalizeCSS
    theme={{


      colorScheme: 'light',
      colors: {
        // add new theme color
        sitePrimary: [],
        siteNeutral: ['#ff7d1a', '#ffede0', '#1d2025', '#68707d', '	#b6bcc8', '#f7f8fd', '#ffffff', '#000000', '#bfbfbf', '#bfbfbf'],

        
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
      <Button color='siteNeutral.0'>h</Button>
      <Temp/>
    </MantineProvider>
  );
}