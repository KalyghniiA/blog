import Card from "@/components/Card/Card";
import ButtonLike from "@/components/ButtonLike/ButtonLike";


export default function Home() {


	return (
		<>
			<header><p>Blog</p></header>
			<div>
				<Card />
			</div>
			<div style={{marginTop: "20px"}}>
				<ButtonLike id={"1"} isActive={false} />
			</div>
		</>
	);
}
