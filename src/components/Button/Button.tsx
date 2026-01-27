import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

export default function Button ({children, ...otherProps}: ButtonProps) {
	return (
		<button
			className={styles.button}
			{...otherProps}
		>
			{children}
		</button>
	);
}