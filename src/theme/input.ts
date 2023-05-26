import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { inputAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(inputAnatomy.keys);

const filledStyle = definePartsStyle({
    field: {
        border: "1px solid",
        borderColor: "gray.600",
        lineHeight: 2,
        bg: "gray.900",
    },
    addon: {
        border: "1px solid",
        borderColor: "gray.600",
        bg: "gray.700",
    },
});

const variants = {
    filled: filledStyle,
};

export const inputTheme = defineMultiStyleConfig({
    variants,
    defaultProps: {
        variant: "filled",
        size: "sm",
    },
});
