import {TagProps} from "@/components/Tag/Tag.props";
import cn from "classnames";
import styles from "./Tag.module.css";

export function Tag({children, styleType, link, ...other}: TagProps) {
	return (
		<a href={link} className={cn(
			styles.tag,{
				[styles.time]: styleType === "time",
				[styles.category]: styleType === "category"
			})} {...other}>{children}</a>
	);
}