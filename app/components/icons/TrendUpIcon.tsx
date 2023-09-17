export function TrendUpIcon({ SellInfo }: { SellInfo: Array<Number> }) {
	let color = "#10B981";
	let path =
		"M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941";
	if (SellInfo[0] < SellInfo[SellInfo.length]) {
		color = "#EF4406";
		path =
			"M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181";
	}
	return (
		<svg
			aria-hidden="true"
			fill="none"
			stroke={color}
			stroke-width="1.5"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d={path} stroke-linecap="round" strokeLinejoin="round"></path>
		</svg>
	);
}
