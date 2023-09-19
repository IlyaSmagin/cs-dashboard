import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "GODash",
	description: "Compare CS:GO items prices",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="h-full bg-neutral-900">
			<body className={" text-white min-h-full"}>{children}</body>
		</html>
	);
}
