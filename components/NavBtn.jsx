import Link from "next/link";

export default function NavBtn({ text, href, className }) {
	return (
		<button
			className={`
			rounded-tl-md  
			mx-auto 
			px-4 
			hover:rounded-tl-none 
			hover:rounded-bl-3xl
			hover:rounded-r-md
			transition-all
			w-[102%]
			border-black 
			border-r-4
			hover:border-b-4
			${className}
		`}
		>
			<Link href={href}>{text}</Link>
		</button>
	);
}
