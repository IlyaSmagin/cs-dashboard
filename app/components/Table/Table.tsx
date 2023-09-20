"use client";
import { useEffect, useState } from "react";
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	SortingState,
	ColumnDef,
	useReactTable,
} from "@tanstack/react-table";
import SortAscIcon from "../icons/SortAscIcon";
import SortDscIcon from "../icons/SortDscIcon";
import { SortIcon } from "../icons/SortIcon";
import { ItemCell } from "./ItemCell";
import { PriceCell } from "./PriceCell";
import { SoldCount } from "./SoldCount";
import { useMediaQuery } from "@/app/hooks/useMatchMedia";

export type CS_ITEM = {
	items: {
		link: string;
		name: string;
		icon: string;
	}[];
	id?: number;
	buy_price: string;
	diff_price: number;
	sell_price: string;
	sold_24h: string;
	profit: number;
};

const columnHelper = createColumnHelper<CS_ITEM>();

const columns = [
	columnHelper.accessor("items", {
		header: "Name",
		cell: (info) => <ItemCell items={info.getValue()} />,
		sortingFn: (rowA: any, rowB: any, columnId: any) => {
			const nameA = rowA.getValue(columnId).name;
			const nameB = rowB.getValue(columnId).name;

			return nameA.localeCompare(nameB);
		},
	}),
	columnHelper.accessor("buy_price", {
		header: () => "Buy Price",
		cell: (info) => (
			<PriceCell price={info.getValue()} sell={false} currency="₽" />
		),
	}),
	columnHelper.accessor("sell_price", {
		header: () => "Sell Price",
		cell: (info) => (
			<PriceCell price={info.getValue()} sell={true} currency="₽" />
		),
	}),
	columnHelper.accessor("diff_price", {
		header: () => "Profit",
		cell: (info) => (
			<PriceCell
				price={info.getValue()}
				sell={info.getValue() > 0}
				currency={"₽"}
			/>
		),
	}),
	columnHelper.accessor("profit", {
		header: () => "Percent",
		cell: (info) => (
			<PriceCell
				price={info.getValue()}
				sell={info.getValue() > 0}
				currency={"%"}
			/>
		),
	}),
	columnHelper.accessor("sold_24h", {
		header: () => "Sold in 24h",
		cell: (info) => <SoldCount soldNum={info.getValue()} />,
	}),
] as Array<ColumnDef<CS_ITEM, any>>;

export default function Table({ data }: { data: Array<CS_ITEM> }) {
	const [sorting, setSorting] = useState<SortingState>([]);

	const [columnVisibility, setColumnVisibility] = useState({});
	const isMediaMatched = useMediaQuery("(max-width: 720px)");

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			columnVisibility,
		},
		defaultColumn: {
			size: 50,
		},

		onColumnVisibilityChange: setColumnVisibility,
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
	});
	const changeVisibility = table.getColumn("sold_24h");
	useEffect(() => {
		if (isMediaMatched && changeVisibility?.getIsVisible()) {
			changeVisibility?.toggleVisibility();
		}
		if (!isMediaMatched && !changeVisibility?.getIsVisible()) {
			changeVisibility?.toggleVisibility();
		}
	}, [isMediaMatched]);
	return (
		<>
			<div>
				<table className=" text-gray-400 text-sm w-full table-fixed ">
					<thead className=" text-gray-500 rounded-3xl">
						{table.getHeaderGroups().map((headerGroup) => (
							<tr
								className="flex flex-wrap sm:table-row justify-between TODO:FIX_ARIA"
								key={headerGroup.id}
							>
								{headerGroup.headers.map((header) => (
									<th
										key={header.id}
										className="first:w-full py-3 text-gray-400 h-12 last:float-right xl:first:w-7/12 sm:first:w-5/12"
										onClick={header.column.getToggleSortingHandler()}
									>
										<div className="flex flex-row items-center text-center cursor-pointer group">
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef
															.header,
														header.getContext()
												  )}
											{{
												asc: <SortAscIcon />,
												desc: <SortDscIcon />,
											}[
												header.column.getIsSorted() as string
											] ?? <SortIcon />}
										</div>
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody className="">
						{table.getRowModel().rows.map((row) => (
							<tr
								key={row.id}
								className="border-b border-gray-800 flex flex-wrap justify-between sm:table-row pb-3"
							>
								{row.getVisibleCells().map((cell) => (
									<td
										key={cell.id}
										className="md:h-12 first:w-full"
									>
										{flexRender(
											cell.column.columnDef.cell,
											cell.getContext()
										)}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}
