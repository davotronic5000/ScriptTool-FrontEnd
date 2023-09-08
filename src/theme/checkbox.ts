import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { checkboxAnatomy } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
    control: {
        borderColor: 'blue.500',
        _dark: {
            borderColor: 'blue.200',
        },
    },
});

export const checkboxTheme = defineMultiStyleConfig({ baseStyle });
