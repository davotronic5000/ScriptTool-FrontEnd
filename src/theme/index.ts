import "@fontsource/raleway/600.css";
import "@fontsource/old-standard-tt/400.css";

import { ThemeConfig } from "@chakra-ui/theme";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/theme-utils";
import colors from "./colors";
import fonts from "./fonts";
import { headingTheme } from "./typography";

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
                bgGradient: mode(
                    "linear(to-b, gray.300, orange.200)",
                    "linear(to-b, teal.600, gray.800)",
                )(props),
            },
        }),
    },
    fonts,
    colors,
    components: {
        Heading: headingTheme,
    },
};

export default extendTheme(overrides);
