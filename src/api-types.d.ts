export interface ScriptSubmission {
    name: string;
    colour: string;
    type: 'teenseyville' | 'ravenswood-bluff' | 'phobos';
    roles: Role[];
    modern?: boolean;
    colourise?: boolean;
    lowInk?: boolean;
}

export type RoleType =
    | 'townsfolk'
    | 'outsider'
    | 'minion'
    | 'demon'
    | 'fabled'
    | 'traveler';

export interface Hatred {
    id: string;
    reason: string;
}

export interface Role {
    id: string;
    name?: string;
    team?: RoleType;
    firstNight?: number;
    otherNight?: number;
    image?: string;
    colour?: string;
}

export interface ScriptRole extends Role {
    firstNightReminder?: string;
    otherNightReminder?: string;
    ability?: string;
    hatred?: Hatred[];
}

export interface TokenReminder {
    text: string;
    count: number;
}

export interface TokenRole extends Role {
    reminders?: TokenReminder[];
    setup?: boolean;
    count?: number;
}

export interface TokenProcessingSize {
    size: number;
    imageMarginX: number;
    imageMarginY: number;
}

export interface TokenProcessingStyleData {
    icon: string;
    colour: string;
}

export interface BorderStyles {
    colour: string;
    alpha: number;
    circleBorder: boolean;
    squareBorder: boolean;
    thickness: number;
}

export interface TokenProcessingVariables {
    page: {
        height: number;
        width: number;
        margin: number;
    };
    tokens: {
        margin: number;
        role: TokenProcessingSize;
        reminder: TokenProcessingSize;
    };
    styles: {
        fontColour: string;
        firstNight: TokenProcessingStyleData;
        otherNight: TokenProcessingStyleData;
        setup: TokenProcessingStyleData;
        reminder: TokenProcessingStyleData;
        border: BorderStyles;
    };
}

export interface GetTokensBody {
    roles: TokenRole[];
    modern?: boolean;
    tokenProcessingSettings: TokenProcessingVariables;
    name: string;
    lowInk?: boolean;
    colourise?: boolean;
}
