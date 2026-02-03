import {ButtonHTMLAttributes} from "react";

export interface ButtonLikeProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    isActive: boolean;
    id: string;

}