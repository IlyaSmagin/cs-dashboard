"use client";
import React from "react";
import classNames from "classnames";

export function PriceCell({
	price,
	sell,
	currency,
}: {
	price: number;
	sell: boolean;
	currency?: string;
}) {
	const status = price ? price.toFixed(2) : "unknown";
	const color = classNames({
		"bg-emerald-800/30 text-emerald-500": sell,
		"bg-rose-800/30 text-rose-500": !sell,
		"bg-gray-700/25 text-gray-600": !price,
	});
	return (
		<span
			className={classNames(
				"sm:px-2 md:px-3 px-1.5 py-1 uppercase leading-wide text-xs rounded-sm shadow-sm",
				color
			)}
		>
			{status}
			{currency && price ? currency : null}
		</span>
	);
}
