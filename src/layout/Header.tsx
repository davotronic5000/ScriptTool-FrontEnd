import { useColorModeValue } from "@chakra-ui/color-mode";
import { GridItem, Flex, Heading } from "@chakra-ui/layout";
import { ComponentType } from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import ClockTowerIcon from "../icons/clock-tower";
import DeathBookIcon from "../icons/death-book";

const Header: ComponentType = () => {
    const bg = useColorModeValue("gray.100", "gray.900");
    const borderColor = useColorModeValue("gray.900", "gray.600");
    return (
        <GridItem
            colSpan={2}
            bg={bg}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            boxShadow="xl"
            borderBottom="1px solid"
            borderBottomColor={borderColor}
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
    );
};

export default Header;
