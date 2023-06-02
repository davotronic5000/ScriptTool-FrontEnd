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
        fontSize: "xs",
        mb: 1,
        fontWeight: "semibold",
    },
});

const baseStyleHelperText = defineStyle({
    textAlign: "left",
    mt: 0,
});

const baseStyle = definePartsStyle({
    helperText: baseStyleHelperText,
    container: {
        marginBottom: 2,
    },
});

export const formTheme = defineMultiStyleConfig({
    baseStyle,
});
