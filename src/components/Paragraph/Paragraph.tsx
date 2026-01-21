import {ParagraphProps} from "@/components/Paragraph/Paragraph.props";
import cn from "classnames";
import styles from "./Paragraph.module.css";


export default function Paragraph({children, size}: ParagraphProps) {
	return (
		<p className={cn(
			styles.paragraph,
			{[styles.small]: size === "s",
				[styles.medium]: size === "m",
				[styles.large]: size === "l"}
		)}>{children}</p>
	);
}