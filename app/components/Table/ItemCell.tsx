"use client";
import React from "react";
import classNames from "classnames";

export function ItemCell({
	items,
}: {
	items: { name: string; link: string; icon: string };
}) {
	const wearIndex = items.name.lastIndexOf("(");
	const itemName =
		wearIndex !== -1 ? items.name.slice(0, wearIndex - 1) : items.name;
	const wearType =
		wearIndex !== -1
			? items.name
					.slice(wearIndex + 1, items.name.lastIndexOf(")"))
					.split(/[\s-]+/)
			: null;
	let wearSpan = wearType?.map((word, index) => (
		<span key={items.link + index}>
			<span>{word[0]}</span>
			<span className="lg:inline-block hidden whitespace-pre">
				{word.slice(1)}
				{word === "Field" || word === "Battle" || word === "Well"
					? "-"
					: " "}
			</span>
		</span>
	));
	const nameColor = classNames({
		btn: true,
		"text-yellow-600": itemName.includes("Souvenir"),
		"text-orange-600":
			itemName.includes("StatTrak™") && !itemName.includes("★"),
		"text-purple-600": itemName.includes("★"),
	});
	return (
		<a
			className={classNames(
				"flex flex-row items-center justify-start gap-x-1 sm:gap-x-3 pr-4 h-full cursor-pointer select-all w-full sm:w-auto grow",
				nameColor
			)}
			href={items.link}
		>
			<img
				className="w-8 h-8 rounded-full select-none hidden sm:block"
				src={
					items.icon ||
					"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUxnaPLJz5H74y1xtTcz6etNumIx29U6Zd3j7yQoYih3lG1-UJqY27xJIeLMlhpaD9Aclo/62fx62f"
				}
			/>
			<span className="grow lg:grow-0 py-1 sm:py-0">{itemName}</span>

			{wearIndex ? (
				<span className="sm:px-2 md:px-3 px-1.5 rounded-sm text-gray-600 bg-gray-700/25 hidden sm:inline-block">
					{wearSpan}
				</span>
			) : null}
		</a>
	);
}
