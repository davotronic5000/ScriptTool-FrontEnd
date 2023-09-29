import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const solid = defineStyle({
    textTransform: 'uppercase',
    fontWeight: 'bold',
    bg: 'blue.200',
    color: 'blue.800',
    borderRadius: 1,
    border: '2px solid',
    borderColor: 'blue.800',
    _hover: {
        bg: 'blue.400',
        color: 'blue.100',
    },
    _dark: {
        bg: 'blue.800',
        color: 'blue.200',
        borderColor: 'blue.200',
        _hover: {
            bg: 'blue.600',
        },
    },
});

const icon = defineStyle({
    color: 'blue.800',
    _hover: {
        color: 'blue.400',
    },
    _dark: {
        color: 'blue.200',
        _hover: {
            color: 'blue.600',
        },
    },
});

const secondary = defineStyle({
    textTransform: 'uppercase',
    fontWeight: 'bold',
    bg: 'red.500',
    color: 'red.50',
    borderRadius: 1,
    border: '2px solid',
    borderColor: 'red.700',
    _hover: {
        bg: 'red.600',
    },
    _dark: {
        bg: 'red.800',
        color: 'red.200',
        borderColor: 'red.200',
        _hover: {
            bg: 'red.700',
        },
    },
});

const buttonTheme = defineStyleConfig({
    defaultProps: {
        size: 'sm',
    },
    variants: { solid, secondary, icon },
});

export default buttonTheme;
