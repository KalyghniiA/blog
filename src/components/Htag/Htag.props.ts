import {ReactNode} from "react";

type Tags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface IHtagProps {
    tag: Tags;
    children: ReactNode;
}