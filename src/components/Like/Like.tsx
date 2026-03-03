import styles from "./Like.module.css";
import {LikeProps} from "@/components/Like/Like.props";

export default function Like({type}: LikeProps) {

	if (type === "card") {
		return (
			<svg className={styles["like-card"]} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M5.33332 6.66666H2.66666V13.3333H5.33332M5.33332 6.66666V13.3333M5.33332 6.66666L8.79704 2.62566C9.12571 2.24221 9.64281 2.07737 10.1328 2.19986L10.1645 2.20779C11.059 2.43141 11.462 3.47372 10.9505 4.24091L9.33332 6.66666H12.3736C13.215 6.66666 13.846 7.43643 13.681 8.26149L12.881 12.2615C12.7564 12.8847 12.2092 13.3333 11.5736 13.3333H5.33332" stroke="#808080" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		);
	} else {
		return (
			<svg className={styles["like-button"]} width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M4.36448 7.03097H0.5V16.6922H4.36448M4.36448 7.03097V16.6922M4.36448 7.03097L9.38404 1.17482C9.86034 0.619136 10.6097 0.380249 11.3197 0.557756L11.3657 0.569245C12.662 0.893322 13.246 2.40382 12.5048 3.51561L10.1612 7.03097H14.5671C15.7864 7.03097 16.701 8.1465 16.4618 9.34216L15.3025 15.1389C15.1218 16.0421 14.3288 16.6922 13.4078 16.6922H4.36448" stroke="#303030" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		);
	}

};

