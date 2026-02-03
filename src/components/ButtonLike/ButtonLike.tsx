import styles from "./ButtonLike.module.css";
import Like from "@/components/Like/Like";
import {useState} from "react";
import {ButtonLikeProps} from "@/components/ButtonLike/ButtonLike.props";

export default function ButtonLike ({isActive, id}: ButtonLikeProps) {
	const [isLike, setIsLike] = useState<boolean>(isActive);

	const updateData = async () => {
		setIsLike(!isLike);
		await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			method: "PATCH"
		});
	};

	return (
		<form action={() =>{
			setIsLike(!isLike);
			return updateData();
		}}>
			<button type={"submit"} className={styles.button}>
				<Like type="button" />
			</button>
		</form>
	);
}

