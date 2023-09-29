import { popoverAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';
const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys);

const picker = definePartsStyle({
    popper: defineStyle({
        fontSize: 'default',
        maxWidth: 'unset',
        width: 'unset',
    }),
});

const baseStyle = definePartsStyle({
    popper: {
        fontSize: '14px',
    },
    header: {
        fontWeight: 'semibold',
    },
});

export const popoverTheme = defineMultiStyleConfig({
    baseStyle,
    variants: { picker },
});
