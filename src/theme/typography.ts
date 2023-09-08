import { defineStyleConfig } from '@chakra-ui/react';

export const headingTheme = defineStyleConfig({
    baseStyle: {
        fontWeight: 'semibold',
        fontVariant: 'small-caps',
        color: 'blue.700',
        _dark: {
            color: 'gray.200',
        },
    },
});
