import {
    createMultiStyleConfigHelpers,
    defineStyle,
    defineStyleConfig,
} from "@chakra-ui/react";
import { formAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(formAnatomy.keys);

export const formLabelTheme = defineStyleConfig({
    baseStyle: {
        textTransform: "uppercase",
        fontSize: "sm",
        mb: 1,
        fontWeight: "semibold",
    },
});

const baseStyleHelperText = defineStyle({
    textAlign: "left",
});

const baseStyle = definePartsStyle({
    helperText: baseStyleHelperText,
});

export const formControlTheme = defineMultiStyleConfig({
    baseStyle,
});
