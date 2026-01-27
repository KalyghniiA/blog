import styles from "./Card.module.css";
import Image from "next/image";
import {Tag} from "@/components/Tag/Tag";
import Like from "@/components/Like/Like";
import {Htag} from "@/components/Htag/Htag";
import Paragraph from "@/components/Paragraph/Paragraph";
import Arrow from "@/components/Arrow/Arrow";

export default function Card() {
	return (
		<div className={styles.container}>
			<div className={styles["image-container"]}>
				<Image className={styles.image} src="/card-image.png" alt='card' width="300" height="192" />
			</div>
			<div className={styles["tag-container"]}>
				<div className={styles["tag-list"]}>
					<Tag styleType={"category"} link={"#"}>Front-end</Tag>
					<div className={styles.separator} />
					<Tag styleType={"time"} link={"#"}>1 месяц назад</Tag>
				</div>
				<div className={styles["like-container"]}>
					<span className={styles["like-quantity"]}>0</span>
					<Like />
				</div>
			</div>
			<Htag tag={"h3"}>Как работать с CSS Grid</Htag>
			<Paragraph size={"m"}>Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..</Paragraph>
			<div className={styles["tag-container"]}>
				<Tag styleType={"time"} link={"#"}>3 минуты</Tag>
				<a href={"#"} className={styles["link"]}>Читать<Arrow /></a>
			</div>
		</div>
	);
}