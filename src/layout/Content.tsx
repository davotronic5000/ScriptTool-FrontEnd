import { ComponentType } from "react";
import { GridItem, Flex } from "@chakra-ui/react";
import { Worker, Viewer, PageLayout } from "@react-pdf-viewer/core";
import { headerSize, footerSize } from "./constants";

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

interface ContentProps {
    pdf: Uint8Array | null;
}

const Content: ComponentType<ContentProps> = ({ pdf }) => {
    return (
        <GridItem
            colSpan={1}
            maxH={`calc(100vh - ${headerSize + footerSize}px)`}
            overflow="scroll"
            p={4}
        >
            <Flex justifyContent="center">
                {pdf && (
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <Viewer fileUrl={pdf} pageLayout={pageLayout} />
                    </Worker>
                )}
            </Flex>
        </GridItem>
    );
};

export default Content;
