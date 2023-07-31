import { popoverAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";
const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys);

const picker = definePartsStyle({
    popper: defineStyle({
        maxWidth: "unset",
        width: "unset",
    }),
});

export const popoverTheme = defineMultiStyleConfig({
    variants: { picker },
});
