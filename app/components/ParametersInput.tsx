"use client";
import { Dispatch, SetStateAction } from "react";
export default function ParametersInput({
	minPlaceholder,
	maxPlaceholder,
	setMax,
	setMin,
	name,
	setName,
}: {
	minPlaceholder: number;
	maxPlaceholder: number;
	setMax: Dispatch<SetStateAction<number>>;
	setMin: Dispatch<SetStateAction<number>>;
	name: string;
	setName: Dispatch<SetStateAction<string>>;
}) {
	return (
		<form
			onSubmit={() => console.log("sub")}
			className="flex w-full px-6 sm:px-0 max-w-screen-2xl justify-between gap-y-8 gap-x-8 lg:gap-x-0 pb-12 flex-wrap md:flex-nowrap"
		>
			<div className="h-10 relative w-full lg:w-1/2 ">
				<label
					className="absolute -top-6 text-sm text-gray-400"
					htmlFor="itemName"
				>
					Name
				</label>
				<input
					type="text"
					value={name ?? null}
					name="itemName"
					onChange={(e) => setName(e.target.value)}
					placeholder="name"
					className="appearance-none w-full h-full px-4 text-sm  border rounded-lg xl:transition-all xl:duration-200 xl:h-10 bg-neutral-900 text-gray-300 border-gray-600 focus:border-primary dark:focus:border-primary focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-20"
				/>
			</div>
			<div className="flex flex-row border h-10 w-full sm:w-auto justify-stretch rounded-lg border-gray-600 relative">
				<label
					className="absolute -top-6 text-sm text-gray-400"
					htmlFor="minPrice"
				>
					Min Price
				</label>
				<button
					type={"button"}
					onClick={() => setMin((prev) => prev - 1)}
					className="font-semibold text-white h-full w-12 flex rounded-l focus:outline-none cursor-pointer"
				>
					<span className="m-auto">-</span>
				</button>
				<input
					onChange={(e) => setMin(parseFloat(e.target.value))}
					value={minPlaceholder}
					type="number"
					className="appearance-none px-8 sm:px-2 w-full placeholder:text-gray-600 text-xs md:text-base bg-transparent border-x  border-gray-600 sm:w-24 focus:outline-none text-center"
					name="minPrice"
					min="0"
					placeholder={minPlaceholder.toString()}
				/>
				<button
					type={"button"}
					onClick={() => setMin((prev) => prev + 1)}
					className="font-semibold text-white h-full w-12 flex rounded-r focus:outline-none cursor-pointer"
				>
					<span className="m-auto">+</span>
				</button>
			</div>
			<div className="flex flex-row justify-stretch w-full sm:w-auto border h-10 rounded-lg border-gray-600 relative">
				<label
					className="absolute -top-6 text-sm text-gray-400"
					htmlFor="maxPrice"
				>
					Max Price
				</label>
				<button
					type={"button"}
					onClick={() => setMax((prev) => prev - 1)}
					className="font-semibold text-white h-full w-12 flex rounded-l focus:outline-none cursor-pointer"
				>
					<span className="m-auto">-</span>
				</button>
				<input
					onChange={(e) => setMax(parseFloat(e.target.value))}
					value={maxPlaceholder}
					type="number"
					className="appearance-none px-8 sm:px-2 placeholder:text-gray-600 py-1 text-xs md:text-base bg-transparent border-x  border-gray-600 w-full sm:w-24 focus:outline-none text-center"
					name="maxPrice"
					min="0"
					placeholder={maxPlaceholder.toString()}
				/>
				<button
					type={"button"}
					onClick={() => setMax((prev) => prev + 1)}
					className="font-semibold text-white h-full w-12 flex rounded-r focus:outline-none cursor-pointer"
				>
					<span className="m-auto">+</span>
				</button>
			</div>
		</form>
	);
}
