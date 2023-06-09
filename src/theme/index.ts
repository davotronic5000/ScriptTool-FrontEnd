import "@fontsource/raleway/400.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import "@fontsource/old-standard-tt/700.css";

import { ThemeConfig } from "@chakra-ui/theme";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/theme-utils";
import colors from "./colors";
import fonts from "./fonts";
import { headingTheme } from "./typography";
import { inputTheme } from "./input";
import { formTheme, formLabelTheme } from "./form";
import buttonTheme from "./button";

const config: ThemeConfig = {
    initialColorMode: "system",
    useSystemColorMode: true,
};

const overrides = {
    config,
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                bg: mode("white", "gray.800")(props),
            },
            "input[type=file]::file-selector-button": {
                display: "none",
            },
        }),
    },
    fonts,
    colors,
    components: {
        Heading: headingTheme,
        Input: inputTheme,
        FormLabel: formLabelTheme,
        Form: formTheme,
        Button: buttonTheme,
    },
};

export default extendTheme(overrides);
