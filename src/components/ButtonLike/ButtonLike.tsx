import styles from "./ButtonLike.module.css";
import Like from "@/components/Like/Like";

export default function ButtonLike () {
	return (
		<button className={styles.button}>
			<Like type="button" />
		</button>
	);
}

