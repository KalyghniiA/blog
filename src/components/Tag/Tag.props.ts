import {AnchorHTMLAttributes, ReactNode} from "react";

export interface TagProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    styleType: "time" | "category",
    link: string;
}