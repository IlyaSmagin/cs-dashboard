export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return (
		<div className="container w-full gap-y-4">
			<table className=" text-gray-400 text-sm w-full">
				<thead className=" text-gray-500 rounded-3xl">
					<tr>
						<th className="py-3 text-center h-12 xl:w-7/12 w-1/3 sm:w-5/12">
							<div className="flex flex-row items-center cursor-pointer">
								Name
							</div>
						</th>
						<th className="py-3 text-center h-12">
							<div className="flex flex-row items-center cursor-pointer">
								Buy Price
							</div>
						</th>
						<th className="py-3 text-center h-12">
							<div className="flex flex-row items-center cursor-pointer">
								Sell Price
							</div>
						</th>
						<th className="py-3 text-center h-12">
							<div className="flex flex-row items-center cursor-pointer">
								Profit
							</div>
						</th>
						<th className="py-3 text-center h-12">
							<div className="flex flex-row items-center cursor-pointer">
								Margin
							</div>
						</th>
						<th className="py-3 text-center h-12 float-right">
							<div className="flex flex-row items-center cursor-pointer">
								Sold in 24h
							</div>
						</th>
					</tr>
				</thead>
				<tbody className=" animate-pulse">
					<tr className="border-b border-gray-800">
						<td className="">
							<a className="flex flex-row items-center justify-start gap-x-3 h-full cursor-pointer select-all">
								<div className="w-8 h-8 rounded-full select-none bg-gray-500"></div>
								<span className="px-2 rounded-sm bg-gray-700/25">
									<div className="w-48 h-6"></div>
								</span>
							</a>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 w-20 h-6 py-1 rounded-sm bg-rose-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="bg-gray-700/25 w-24 h-6 sm:px-2 md:px-3 px-1.5 py-1 rounded-sm float-right"></div>
						</td>
					</tr>
					<tr className="border-b border-gray-800">
						<td className="">
							<a className="flex flex-row items-center justify-start gap-x-3 h-full cursor-pointer select-all">
								<div className="w-8 h-8 rounded-full select-none bg-gray-500"></div>
								<span className="px-2 rounded-sm bg-gray-700/25">
									<div className="w-48 h-6"></div>
								</span>
							</a>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 w-20 h-6 py-1 rounded-sm bg-rose-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="bg-gray-700/25 w-24 h-6 sm:px-2 md:px-3 px-1.5 py-1 rounded-sm float-right"></div>
						</td>
					</tr>
					<tr className="border-b border-gray-800">
						<td className="">
							<a className="flex flex-row items-center justify-start gap-x-3 h-full cursor-pointer select-all">
								<div className="w-8 h-8 rounded-full select-none bg-gray-500"></div>
								<span className="px-2 rounded-sm bg-gray-700/25">
									<div className="w-48 h-6"></div>
								</span>
							</a>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 w-20 h-6 py-1 rounded-sm bg-rose-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="bg-gray-700/25 w-24 h-6 sm:px-2 md:px-3 px-1.5 py-1 rounded-sm float-right"></div>
						</td>
					</tr>
					<tr className="border-b border-gray-800">
						<td className="">
							<a className="flex flex-row items-center justify-start gap-x-3 h-full cursor-pointer select-all">
								<div className="w-8 h-8 rounded-full select-none bg-gray-500"></div>
								<span className="px-2 rounded-sm bg-gray-700/25">
									<div className="w-48 h-6"></div>
								</span>
							</a>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 w-20 h-6 py-1 rounded-sm bg-rose-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="bg-gray-700/25 w-24 h-6 sm:px-2 md:px-3 px-1.5 py-1 rounded-sm float-right"></div>
						</td>
					</tr>
					<tr className="border-b border-gray-800">
						<td className="">
							<a className="flex flex-row items-center justify-start gap-x-3 h-full cursor-pointer select-all">
								<div className="w-8 h-8 rounded-full select-none bg-gray-500"></div>
								<span className="px-2 rounded-sm bg-gray-700/25">
									<div className="w-48 h-6"></div>
								</span>
							</a>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 w-20 h-6 py-1 rounded-sm bg-rose-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="bg-gray-700/25 w-24 h-6 sm:px-2 md:px-3 px-1.5 py-1 rounded-sm float-right"></div>
						</td>
					</tr>
					<tr className="border-b border-gray-800">
						<td className="">
							<a className="flex flex-row items-center justify-start gap-x-3 h-full cursor-pointer select-all">
								<div className="w-8 h-8 rounded-full select-none bg-gray-500"></div>
								<span className="px-2 rounded-sm bg-gray-700/25">
									<div className="w-48 h-6"></div>
								</span>
							</a>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 w-20 h-6 py-1 rounded-sm bg-rose-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="bg-gray-700/25 w-24 h-6 sm:px-2 md:px-3 px-1.5 py-1 rounded-sm float-right"></div>
						</td>
					</tr>
					<tr className="border-b border-gray-800">
						<td className="">
							<a className="flex flex-row items-center justify-start gap-x-3 h-full cursor-pointer select-all">
								<div className="w-8 h-8 rounded-full select-none bg-gray-500"></div>
								<span className="px-2 rounded-sm bg-gray-700/25">
									<div className="w-48 h-6"></div>
								</span>
							</a>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 w-20 h-6 py-1 rounded-sm bg-rose-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="bg-gray-700/25 w-24 h-6 sm:px-2 md:px-3 px-1.5 py-1 rounded-sm float-right"></div>
						</td>
					</tr>
					<tr className="border-b border-gray-800">
						<td className="">
							<a className="flex flex-row items-center justify-start gap-x-3 h-full cursor-pointer select-all">
								<div className="w-8 h-8 rounded-full select-none bg-gray-500"></div>
								<span className="px-2 rounded-sm bg-gray-700/25">
									<div className="w-48 h-6"></div>
								</span>
							</a>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 w-20 h-6 py-1 rounded-sm bg-rose-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="bg-gray-700/25 w-24 h-6 sm:px-2 md:px-3 px-1.5 py-1 rounded-sm float-right"></div>
						</td>
					</tr>
					<tr className="border-b border-gray-800">
						<td className="">
							<a className="flex flex-row items-center justify-start gap-x-3 h-full cursor-pointer select-all">
								<div className="w-8 h-8 rounded-full select-none bg-gray-500"></div>
								<span className="px-2 rounded-sm bg-gray-700/25">
									<div className="w-48 h-6"></div>
								</span>
							</a>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 w-20 h-6 py-1 rounded-sm bg-rose-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="bg-gray-700/25 w-24 h-6 sm:px-2 md:px-3 px-1.5 py-1 rounded-sm float-right"></div>
						</td>
					</tr>
					<tr className="border-b border-gray-800">
						<td className="">
							<a className="flex flex-row items-center justify-start gap-x-3 h-full cursor-pointer select-all">
								<div className="w-8 h-8 rounded-full select-none bg-gray-500"></div>
								<span className="px-2 rounded-sm bg-gray-700/25">
									<div className="w-48 h-6"></div>
								</span>
							</a>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 w-20 h-6 py-1 rounded-sm bg-rose-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="sm:px-2 md:px-3 px-1.5 py-1 w-20 h-6 rounded-sm bg-emerald-800/30"></div>
						</td>
						<td className="h-12">
							<div className="bg-gray-700/25 w-24 h-6 sm:px-2 md:px-3 px-1.5 py-1 rounded-sm float-right"></div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
