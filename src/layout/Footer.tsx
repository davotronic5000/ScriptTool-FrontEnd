import { useColorModeValue } from "@chakra-ui/color-mode";
import { GridItem } from "@chakra-ui/layout";
import { ComponentType } from "react";

const Footer: ComponentType = () => {
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
            borderTop="1px solid"
            borderTopColor={borderColor}
            p={2}
            fontSize="sm"
        >
            This project is not affiliated with The Pandemonium Institute. All
            roles, content are the property of Steven Medway and The Pandemonium
            Institute.
        </GridItem>
    );
};

export default Footer;
