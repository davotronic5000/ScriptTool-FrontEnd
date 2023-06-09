import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Layout from "./layout/Layout";
import "@react-pdf-viewer/core/lib/styles/index.css";

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Layout />
        </ChakraProvider>
    );
};
