"use client";
import React from "react";

function TimeCell({ time }: { time: string }) {
	if (time) {
		return (
			<span className="truncate text-ellipsis">
				new Date(time).toDateString()
			</span>
		);
	} else {
		return (
			<span className="bg-gray-700/25 text-gray-600 px-3 py-1 uppercase leading-wide text-xs rounded-sm shadow-sm truncate text-ellipsis float-right">
				Not yet checked
			</span>
		);
	}
}
