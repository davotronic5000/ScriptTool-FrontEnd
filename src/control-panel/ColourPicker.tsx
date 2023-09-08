import React, { ComponentType } from 'react';
import {
    Popover,
    PopoverTrigger,
    Button,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
    Center,
    SimpleGrid,
    Input,
    Text,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';

const colors = [
    'gray',
    'red',
    'teal',
    'blue',
    'navy',
    'yellow',
    'orange',
    'purple',
    'green',
    '#ff80ff',
];

interface ColourPickerProps {
    onChange: (colour: string) => void;
    value: string;
}

const ColourPicker: ComponentType<ColourPickerProps> = ({
    onChange,
    value,
}) => {
    const linkColor = useColorModeValue('yellow.700', 'yellow.300');
    const buttonBorderColor = useColorModeValue(
        'blackAlpha.600',
        'whiteAlpha.400',
    );
    return (
        <Popover variant="picker">
            <PopoverTrigger>
                <Button
                    aria-label={value}
                    background={value}
                    height="22px"
                    width="80px"
                    padding={0}
                    minWidth="unset"
                    variant="unstyled"
                    borderRadius={3}
                    borderColor={buttonBorderColor}
                    borderWidth={1}
                    _hover={{ background: value }}
                ></Button>
            </PopoverTrigger>
            <PopoverContent width="180px">
                <PopoverArrow bg={value} />
                <PopoverCloseButton color="white" />
                <PopoverHeader
                    height="100px"
                    backgroundColor={value}
                    borderTopLeftRadius={5}
                    borderTopRightRadius={5}
                    color="white"
                >
                    <Center height="100%">{value}</Center>
                </PopoverHeader>
                <PopoverBody height="130px">
                    <SimpleGrid columns={5} spacing={2}>
                        {colors.map((c) => (
                            <Button
                                key={c}
                                aria-label={c}
                                background={c}
                                height="22px"
                                width="22px"
                                padding={0}
                                minWidth="unset"
                                variant="unstyled"
                                borderRadius={3}
                                borderColor={buttonBorderColor}
                                borderWidth={1}
                                _hover={{ background: c }}
                                onClick={() => {
                                    onChange(c);
                                }}
                            ></Button>
                        ))}
                    </SimpleGrid>
                    <Input
                        borderRadius={3}
                        marginTop={3}
                        placeholder="#f4f4f4"
                        size="sm"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    />
                    <Text fontSize="2xs">
                        Type a colour name or a{' '}
                        <Link
                            isExternal
                            color={linkColor}
                            href="https://redketchup.io/color-picker"
                        >
                            hexcode
                        </Link>
                    </Text>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
};

export default ColourPicker;
