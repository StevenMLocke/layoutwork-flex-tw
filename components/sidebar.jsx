export default function Sidebar(props) {
	return (
		<aside
			className={`${props.expanded ? "fixed w-screen " : "hidden"} 
			 min-h-[calc(100vh_-_64px)]
			 flex-col
			 md:flex
			 bg-slate-500
			 md:w-1/4
			 sticky
			 top-[64px]
			 self-start`}
		>
			SideBar
		</aside>
	);
}
