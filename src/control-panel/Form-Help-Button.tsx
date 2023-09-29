import { QuestionIcon } from '@chakra-ui/icons';
import {
    IconButton,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
} from '@chakra-ui/react';
import { ComponentType, ReactElement } from 'react';

interface FormHelpButtonTextProps {
    title: string;
    bodyContent: string | ReactElement;
}

const FormHelpButton: ComponentType<FormHelpButtonTextProps> = ({
    title,
    bodyContent,
}) => {
    return (
        <Popover placement="bottom-end">
            <PopoverTrigger>
                <IconButton
                    aria-label="Explain Setting"
                    variant="icon"
                    icon={<QuestionIcon />}
                />
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>{title}</PopoverHeader>
                <PopoverBody>{bodyContent}</PopoverBody>
            </PopoverContent>
        </Popover>
    );
};

export default FormHelpButton;
