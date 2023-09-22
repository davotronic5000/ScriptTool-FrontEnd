import React, { useState, ComponentType } from 'react';
import { Box, Grid, useColorModeValue } from '@chakra-ui/react';
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';
import { headerSize, footerSize } from './constants';
import Footer from './Footer';
import useScriptManager from '../control-panel/use-script-manager';
import useTokenManager from '../control-panel/use-token-manager';

const Layout: ComponentType = () => {
    const [pdf, updatePdf] = useState<Uint8Array | null>(null);
    const { script, dispatch } = useScriptManager();
    const { tokenSettings, dispatchTokenActions } = useTokenManager();
    const bg = useColorModeValue('blue.700', 'gray.700');
    return (
        <Box textAlign="center" fontSize="xl">
            <Grid
                minH="100vh"
                templateColumns={'2fr 5fr'}
                templateRows={`${headerSize}px auto ${footerSize}px`}
                bg={bg}
            >
                <Header />
                <SideBar
                    updatePdf={updatePdf}
                    script={script}
                    dispatch={dispatch}
                    tokenSettings={tokenSettings}
                    dispatchTokenActions={dispatchTokenActions}
                />
                <Content pdf={pdf} scriptName={script?.name} />
                <Footer />
            </Grid>
        </Box>
    );
};

export default Layout;
