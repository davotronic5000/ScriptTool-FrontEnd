import { ComponentType } from "react";
import { GridItem, Flex, Button } from "@chakra-ui/react";
import { Worker, Viewer, PageLayout } from "@react-pdf-viewer/core";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { headerSize, footerSize } from "./constants";
import { DownloadIcon } from "@chakra-ui/icons";

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
    scriptName?: string;
}

const Content: ComponentType<ContentProps> = ({
    pdf,
    scriptName = "script",
}) => {
    const getFilePluginInstance = getFilePlugin({
        fileNameGenerator: () => {
            const fileName = scriptName
                .toLowerCase()
                .replace(/[^a-z0-9]+/gi, "-");
            return fileName;
        },
    });
    const { Download } = getFilePluginInstance;
    return (
        <GridItem
            colSpan={1}
            maxH={`calc(100vh - ${headerSize + footerSize}px)`}
            overflow="scroll"
            p={4}
        >
            <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                {pdf && (
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <Download>
                            {({ onClick }) => {
                                return (
                                    <Button
                                        onClick={onClick}
                                        leftIcon={<DownloadIcon />}
                                    >
                                        Download PDF
                                    </Button>
                                );
                            }}
                        </Download>
                        {/* <Flex
                            bg="gray.200"
                            p={2}
                            border="1px solid"
                            borderColor="gray.900"
                            fontSize="small"
                            color="gray.900"
                            alignItems="center"
                        >
                            <DownloadButton /> Download PDF
                        </Flex> */}
                        <Viewer
                            fileUrl={pdf}
                            pageLayout={pageLayout}
                            plugins={[getFilePluginInstance]}
                        />
                    </Worker>
                )}
            </Flex>
        </GridItem>
    );
};

export default Content;
