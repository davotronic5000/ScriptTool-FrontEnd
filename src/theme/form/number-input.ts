import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { numberInputAnatomy } from '@chakra-ui/anatomy';
import { defaultInputStyles } from './shared-styles';

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(numberInputAnatomy.keys);

const filledStyle = definePartsStyle({
    ...defaultInputStyles,
    stepper: {
        fontSize: '8px',
    },
});

const variants = {
    filled: filledStyle,
};

export const numberInputTheme = defineMultiStyleConfig({
    variants,
    defaultProps: {
        variant: 'filled',
        size: 'sm',
    },
});
