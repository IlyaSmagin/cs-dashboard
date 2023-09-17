"use client";
import React from "react";

export function SoldCount({ soldNum }: { soldNum: number }) {
	if (soldNum) {
		return (
			<span className="truncate text-ellipsis text-right float-right">
				{soldNum}
			</span>
		);
	} else {
		return (
			<span className="bg-gray-700/25 text-gray-600 sm:px-2 md:px-3 px-1.5 py-1 uppercase leading-wide text-xs rounded-sm shadow-sm truncate text-ellipsis float-right">
				Unknown
			</span>
		);
	}
}
