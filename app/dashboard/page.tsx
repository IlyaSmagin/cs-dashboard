"use client";
import Table, { CS_ITEM } from "../components/Table/Table";
import ParametersInput from "../components/ParametersInput";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
	const [maxPrice, setMaxPrice] = useState<number>(4000);
	const [nameSearch, setNameSearch] = useState<string>("");
	const [minPrice, setMinPrice] = useState<number>(1000);
	const [tableData, setTableData] = useState<Array<CS_ITEM>>();
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		const url = `./api?maxPrice=${maxPrice}&minPrice=${minPrice}&search=${nameSearch}&limit=${50}`;
		let ignore = false;
		fetch(url)
			.then((response) => response.json())
			.then((json) => {
				if (!ignore) {
					setTableData(json);
					setLoading(false);
				}
			});
		return () => {
			ignore = true;
		};
	}, [maxPrice, minPrice, nameSearch]);

	return (
		<>
			<ParametersInput
				maxPlaceholder={maxPrice}
				setMax={setMaxPrice}
				minPlaceholder={minPrice}
				setMin={setMinPrice}
				name={nameSearch}
				setName={setNameSearch}
			/>
			{tableData && !loading ? <Table data={tableData} /> : <Loading />}
		</>
	);
}
