import { ComponentType } from "react";
import { GridItem, useColorModeValue } from "@chakra-ui/react";
import ControlPanel, { ControlPanelProps } from "../control-panel/ControlPanel";

interface SideBarProps extends ControlPanelProps {}

const SideBar: ComponentType<SideBarProps> = (props) => {
    const bg = useColorModeValue("gray.300", "purple.900");
    const borderColor = useColorModeValue("gray.900", "gray.600");
    return (
        <GridItem
            colSpan={1}
            bg={bg}
            boxShadow="dark-lg"
            borderRight="1px solid"
            borderRightColor={borderColor}
            textAlign="left"
        >
            <ControlPanel {...props} />
        </GridItem>
    );
};

export default SideBar;
