import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
    theme: {
        tokens: {
            fonts: {
                heading: { value: "'FixelDisplay', sans-serif" },
                body: { value: "'FixelText', sans-serif" },
            },
            colors: {
                text: { value: '#667085' },
                heading: { value: '#101828' },
                green: { value: "#087443"}
            },
            fontWeights: {
                normal: { value: '400' },
                medium: { value: '600' },
            },
            fontSizes: {
                normal: { value: '18px' },
            },
            
        },
        semanticTokens: {
            colors: {
              green: {
                solid: { value: "{colors.green}" },
              },
            },
          },
    },
    globalCss: {
        'body': {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.normal}',
            fontSize: '{fontSizes.normal}',
            color: '{colors.text}',
        },
        'h1,h2,h3,h4,h5,h6': {
            color: '{colors.heading}',
        },
    },
});

export const system = createSystem(defaultConfig, customConfig);
