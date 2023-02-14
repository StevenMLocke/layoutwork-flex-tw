"use client";
import { useState } from "react";
import Card from "@/components/Card";

export default function Page({ children }) {
	const [rotated, setRotated] = useState(false);

	const clickHander = (e) => {
		setRotated(!rotated);
	};

	return (
		<div className='wrapper h-[100cqh] border-2 border-white flex'>
			<div
				className={` 
							border-2 border-red-500 
							w-full h-full
							flex
							justify-end
							items-end
							rotate-[-45deg]
							origin-bottom-left
							${rotated && "rotate-[-0.0deg] translate-x-0"}
							`}
				onClick={clickHander}
			>
				{rotated ? "rotated" : "not rotated"}
			</div>
		</div>
	);
}
