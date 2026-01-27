import {IHtagProps} from "@/components/Htag/Htag.props";
import styles from "./Htag.module.css";
import cn from "classnames";

export function Htag ({tag, children}: IHtagProps) {
	switch (tag) {
	case "h1":
		return <h1 className={cn(styles.header, styles.large)}>{children}</h1>;
	case "h2":
		return <h2 className={cn(styles.header, styles.medium)} >{children}</h2>;
	case "h3":
		return <h3 className={cn(styles.header, styles.small)}>{children}</h3>;
	default:
		throw new Error(`Unknown tag "${tag}"`);
	}
}