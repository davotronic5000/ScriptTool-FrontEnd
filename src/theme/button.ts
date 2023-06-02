import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const solid = defineStyle({
    textTransform: "uppercase",
    fontWeight: "bold",
    bg: "blue.800",
    color: "blue.200",
    borderRadius: 1,
    border: "2px solid",
    borderColor: "blue.200",
    _hover: {
        bg: "blue.600",
    },
});

const secondary = defineStyle({
    textTransform: "uppercase",
    fontWeight: "bold",
    bg: "red.800",
    color: "red.200",
    borderRadius: 1,
    border: "2px solid",
    borderColor: "red.200",
    _hover: {
        bg: "red.700",
    },
});

const buttonTheme = defineStyleConfig({
    defaultProps: {
        size: "sm",
    },
    variants: { solid, secondary },
});

export default buttonTheme;
