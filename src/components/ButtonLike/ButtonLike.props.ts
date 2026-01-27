import {ButtonHTMLAttributes, ReactNode} from "react";

export interface ButtonLikeProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    isActive: boolean;
}