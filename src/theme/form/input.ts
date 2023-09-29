import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { inputAnatomy } from '@chakra-ui/anatomy';
import { defaultInputStyles } from './shared-styles';

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(inputAnatomy.keys);

const filledStyle = definePartsStyle(defaultInputStyles);

const variants = {
    filled: filledStyle,
};

export const inputTheme = defineMultiStyleConfig({
    variants,
    defaultProps: {
        variant: 'filled',
        size: 'sm',
    },
});
