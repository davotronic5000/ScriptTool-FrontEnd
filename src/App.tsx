import * as React from "react";
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

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            <Grid
                minH="100vh"
                templateColumns={"1fr 2fr"}
                templateRows={"min-content auto"}
                bg="gray.700"
            >
                <GridItem
                    colSpan={2}
                    bg="gray.900"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    height="fit-content"
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
                        <DeathBookIcon boxSize={12} color="yellow.600" pl={2} />
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
                    <ControlPanel />
                </GridItem>
                <GridItem colSpan={1} />
            </Grid>
        </Box>
    </ChakraProvider>
);
