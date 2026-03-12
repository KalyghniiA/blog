import Card from "@/components/Card/Card";
import styles from "./CardList.module.css";

export default function CardList() {
	return (
		<section className={styles.container}>
			<Card />
			<Card />
			<Card />
		</section>

	);
}