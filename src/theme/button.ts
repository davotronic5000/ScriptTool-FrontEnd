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

const buttonTheme = defineStyleConfig({
    defaultProps: {
        size: "sm",
    },
    variants: { solid },
});

export default buttonTheme;
