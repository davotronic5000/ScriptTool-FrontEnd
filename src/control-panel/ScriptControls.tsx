import {
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { ComponentType, Fragment } from "react";

const ScriptControls: ComponentType = () => {
    return (
        <Fragment>
            <FormControl>
                <FormLabel>2. Choose a name</FormLabel>
                <Input type="text" />
            </FormControl>
            <FormControl>
                <FormLabel>3. Choose a colour</FormLabel>
                <Input type="color" />
                <FormHelperText>
                    Please upload the JSON of your script.
                </FormHelperText>
            </FormControl>
        </Fragment>
    );
};

export default ScriptControls;
