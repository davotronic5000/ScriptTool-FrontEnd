import {
    Box,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
} from "@chakra-ui/react";
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
        <Box>
            <FormControl>
                <FormLabel>Upload a script</FormLabel>
                <Input
                    placeholder="Basic usage"
                    variant="filled"
                    type="file"
                    onChange={handleChange}
                    value={value}
                />
                <FormHelperText>
                    Please upload the JSON of your script.
                </FormHelperText>
            </FormControl>
        </Box>
    );
};

export default FileUpload;
