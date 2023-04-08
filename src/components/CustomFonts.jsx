import { Global } from '@mantine/core';

import KumbhSansBold from '../fonts/KumbhSans.ttf';

export function CustomFonts() {
    return (
        <Global
            styles={[
                {
                    '@font-face': {
                        fontFamily: 'Kumbh Sans',
                        src: `url('${KumbhSansBold}') format("ttf")`,
                        fontWeight: 700,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Kumbh Sans',
                        src: `url('${KumbhSansBold}') format("ttf")`,
                        fontWeight: 900,
                        fontStyle: 'normal',
                    },
                },
            ]}
        />
    );
}