import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard",
	description: "Compare items prices",
};
export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<main className="flex h-full w-full flex-col items-center justify-start px-1 sm:px-2 md:px-4 lg:px-8">
				<header className="container h-20 shrink-0 px-6 md:px-0 flex flex-row justify-between items-center">
					<Link
						className={"text-2xl font-bold text-gray-200"}
						href="/"
					>
						GODash
					</Link>
					<Link
						href="/"
						className="text-slate-400 flex gap-x-2 font-mono"
					>
						{/* <SettingsIcon /> */}
						v0.0.1
					</Link>
				</header>
				<div className="container h-fit ">
					{/*  max-w-screen-2xl */}
					<h3 className="w-full py-8 text-3xl font-bold">
						Choose parameters <br />
						<span className="text-gray-500">
							to select and compare items
						</span>
					</h3>{" "}
					{children}
				</div>
			</main>
			<footer className="container mx-auto py-10 text-gray-400">
				GODash shows approximate prices. All data is from public
				sources. By gladyshewm & lalacode, {new Date().getFullYear()}
			</footer>
		</>
	);
}
