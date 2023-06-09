import React, { useState, ComponentType } from "react";
import { Box, Grid, useColorModeValue } from "@chakra-ui/react";
import Header from "./Header";
import SideBar from "./SideBar";
import Content from "./Content";

const Layout: ComponentType = () => {
    const [pdf, updatePdf] = useState<Uint8Array | null>(null);
    const bg = useColorModeValue("blue.700", "gray.700");
    return (
        <Box textAlign="center" fontSize="xl">
            <Grid
                minH="100vh"
                templateColumns={"2fr 5fr"}
                templateRows={"65px auto"}
                bg={bg}
            >
                <Header />
                <SideBar updatePdf={updatePdf} />
                <Content pdf={pdf} />
            </Grid>
        </Box>
    );
};

export default Layout;
