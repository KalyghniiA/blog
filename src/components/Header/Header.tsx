import styles from "./Header.module.css";
import GithubLink from "@/components/GithubLink/GithubLink";

export default function Header() {
	return (
		<header className={styles.header}>
			<a href="#" className={styles.logo}>.my_blog</a>
			<GithubLink />
		</header>
	);
}