export default function Sidebar(props) {
	return (
		<aside
			className={`${
				props.expanded
					? "w-9/12 h-3/6 border-r-2 border-b-2 border-b-white border-r-white"
					: "hidden"
			} 
				bg-slate-800
				md:h-auto
				min-h-[calc(100vh_-_var(--header-offset))]
				md:flex
				flex-col
				top-[var(--header-offset)]

				md:basis-1/4
				2xl:basis-1/6
				3xl:basis-1/12

				md:shrink-0
				fixed
				md:sticky
				
				md:self-start

				pl-4 pt-4
				z-20
			`}
		>
			{props.children}
		</aside>
	);
}
