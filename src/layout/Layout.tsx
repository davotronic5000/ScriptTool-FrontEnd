import React, { useState, ComponentType } from "react";
import { Box, Grid, useColorModeValue } from "@chakra-ui/react";
import Header from "./Header";
import SideBar from "./SideBar";
import Content from "./Content";
import { headerSize, footerSize } from "./constants";
import Footer from "./Footer";

const Layout: ComponentType = () => {
    const [pdf, updatePdf] = useState<Uint8Array | null>(null);
    const bg = useColorModeValue("blue.700", "gray.700");
    return (
        <Box textAlign="center" fontSize="xl">
            <Grid
                minH="100vh"
                templateColumns={"2fr 5fr"}
                templateRows={`${headerSize}px auto ${footerSize}px`}
                bg={bg}
            >
                <Header />
                <SideBar updatePdf={updatePdf} />
                <Content pdf={pdf} />
                <Footer />
            </Grid>
        </Box>
    );
};

export default Layout;
