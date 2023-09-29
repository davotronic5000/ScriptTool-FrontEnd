import {
    Button,
    ButtonGroup,
    Checkbox,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Text,
} from '@chakra-ui/react';
import { ComponentType, Fragment, useState } from 'react';
import { TokenProcessingVariables } from '../api-types';
import FormHelpButton from './Form-Help-Button';
import SharedScriptFields, {
    SharedScriptFieldsProps,
} from './SharedScriptFields';
import { TokenManagerDispatch } from './use-token-manager';

interface TokenSettingsProps extends SharedScriptFieldsProps {
    dispatchTokenActions: TokenManagerDispatch;
    tokenSettings: TokenProcessingVariables;
}

const TokenSettings: ComponentType<TokenSettingsProps> = ({
    dispatch,
    dispatchTokenActions,
    script,
    tokenSettings,
}) => {
    const [showExtraConfig, updateShowExtraConfig] = useState<boolean>(false);
    return (
        <Fragment>
            <SharedScriptFields dispatch={dispatch} script={script} />
            <FormControl>
                <FormLabel>Low ink mode:</FormLabel>
                <Checkbox
                    isChecked={script.lowInk}
                    onChange={(event) =>
                        dispatch({
                            type: 'update-boolean-value',
                            data: {
                                key: 'lowInk',
                                value: event.target.checked,
                            },
                        })
                    }
                />
            </FormControl>
            {!showExtraConfig && (
                <Button onClick={() => updateShowExtraConfig(true)}>
                    Show Advanced Options
                </Button>
            )}
            {showExtraConfig && (
                <Fragment>
                    <FormControl>
                        <Flex
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <FormLabel mb={0}>
                                Page Margin (
                                <Text textTransform="lowercase" as="span">
                                    mm
                                </Text>
                                ):
                            </FormLabel>
                            <FormHelpButton
                                title="Page Margin"
                                bodyContent={
                                    <Fragment>
                                        <Text>
                                            Specifies the gap around the outside
                                            of the page - useful for making sure
                                            tokens are not printed too close to
                                            the edge.
                                        </Text>
                                        <Text>Defined in millimetres.</Text>
                                    </Fragment>
                                }
                            />
                        </Flex>
                        <NumberInput
                            value={tokenSettings.page.margin}
                            onChange={(value) =>
                                dispatchTokenActions({
                                    type: 'set-token-page-margin',
                                    payload: {
                                        value: Number(value),
                                    },
                                })
                            }
                            min={0}
                            max={tokenSettings.page.width}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                    <ButtonGroup>
                        <Button onClick={() => updateShowExtraConfig(false)}>
                            Hide Advanced Options
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() =>
                                dispatchTokenActions({ type: 'reset-tokens' })
                            }
                        >
                            Reset
                        </Button>
                    </ButtonGroup>
                </Fragment>
            )}
            <Divider orientation="horizontal" my={4} />
        </Fragment>
    );
};

export default TokenSettings;
