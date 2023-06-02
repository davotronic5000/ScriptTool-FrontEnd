import {
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
} from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import { ChangeEventHandler, ComponentType } from "react";

interface FileUploadProps {
    value: string;
    handleChange: ChangeEventHandler<HTMLInputElement>;
}

const FileUpload: ComponentType<FileUploadProps> = ({
    value,
    handleChange,
}) => {
    return (
        <FormControl>
            <FormLabel>Upload a script:</FormLabel>
            <InputGroup>
                <InputLeftAddon pointerEvents="none">
                    <AttachmentIcon color="gray.300" />
                </InputLeftAddon>{" "}
                <Input
                    placeholder="Basic usage"
                    type="file"
                    onChange={handleChange}
                    value={value}
                    accept=".json"
                />
            </InputGroup>
            <FormHelperText>
                Please upload the JSON of your script.
            </FormHelperText>
        </FormControl>
    );
};

export default FileUpload;
