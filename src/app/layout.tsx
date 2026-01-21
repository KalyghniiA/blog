import type { Metadata } from "next";
import {  Noto_Sans } from "next/font/google";
import "./globals.css";

const inter = Noto_Sans({
	subsets: ["cyrillic", "latin"]
});

export const metadata: Metadata = {
	title: "Мой блог",
	description: "Это мой блог",
	appLinks: {
	}
};

export default function RootLayout({
	children
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={`${inter.className}`}>
				<div className={`${inter.className} container`} >
					{children}
				</div>
			</body>
		</html>
	);
}
