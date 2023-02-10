import { useRef } from "react";
import { useEffect } from "react";

export default function Header(props) {
	const headerRef = useRef(null);

	useEffect(() => {
		const headerHeight = headerRef.current.offsetHeight;
		document.documentElement.style.setProperty(
			"--header-offset",
			`${headerHeight}px`
		);
	}, []);

	return (
		<header
			ref={headerRef}
			className='flex 
									basis-full
									sticky
									top-0
									justify-center
									space-x-4
									p-4 
									z-10
									bg-warning'
		>
			<h1 className='overflow-clip font-bold '>{props.children}</h1>
			<button
				onClick={props.click}
				className='md:invisible border-2 border-solid border-gray-700 rounded px-1 '
			>
				Ok!
			</button>
		</header>
	);
}
