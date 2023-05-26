import { Role } from "../api-types";

export interface Metadata {
    id: "_meta";
    name: string;
    author: string;
    logo: string;
    colour: string;
    colouriseImaged: boolean;
    backCoverImage?: string;
}

export type RawScript = (Metadata | Role)[];
