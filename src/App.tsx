import React, { useState } from "react";
import {
    ChakraProvider,
    Box,
    Grid,
    GridItem,
    Heading,
    Flex,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import theme from "./theme";
import ControlPanel from "./control-panel/ControlPanel";
import ClockTowerIcon from "./icons/clock-tower";
import DeathBookIcon from "./icons/death-book";
import { Worker, Viewer, PageLayout } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const pageLayout: PageLayout = {
    buildPageStyles: () => ({
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
    }),
    transformSize: ({ size }) => ({
        height: size.height + 30,
        width: size.width + 30,
    }),
};

export const App = () => {
    const [pdf, updatePdf] = useState<Uint8Array | null>(null);
    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <Grid
                    minH="100vh"
                    templateColumns={"2fr 5fr"}
                    templateRows={"65px auto"}
                    bg="gray.700"
                >
                    <GridItem
                        colSpan={2}
                        bg="gray.900"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        boxShadow="xl"
                        borderBottom="1px solid"
                        borderBottomColor="gray.600"
                        p={2}
                    >
                        <Flex alignItems="center">
                            <ClockTowerIcon boxSize={12} color="yellow.600" />
                            <Heading as="h1" size="lg">
                                Blood On The Clocktower: Script Tool
                            </Heading>
                            <DeathBookIcon
                                boxSize={12}
                                color="yellow.600"
                                pl={2}
                            />
                        </Flex>

                        <ColorModeSwitcher color="yellow.600" />
                    </GridItem>
                    <GridItem
                        colSpan={1}
                        bg="purple.900"
                        boxShadow="dark-lg"
                        borderRight="1px solid"
                        borderRightColor="gray.600"
                        textAlign="left"
                    >
                        <ControlPanel updatePdf={updatePdf} />
                    </GridItem>
                    <GridItem
                        colSpan={1}
                        maxH="calc(100vh - 65px)"
                        overflow="scroll"
                        p={4}
                    >
                        <Flex justifyContent="center">
                            {pdf && (
                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                                    <Viewer
                                        fileUrl={pdf}
                                        pageLayout={pageLayout}
                                    />
                                </Worker>
                            )}
                        </Flex>
                    </GridItem>
                </Grid>
            </Box>
        </ChakraProvider>
    );
};
