import { Box } from "@chakra-ui/react";
import { ComponentType } from "react";
import FileUpload from "./FileUpload";

const ControlPanel: ComponentType = () => {
    return (
        <Box>
            Control Panel
            <FileUpload />
        </Box>
    );
};

export default ControlPanel;
