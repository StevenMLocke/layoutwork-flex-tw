export default function Header(props) {
	return (
		<header
			className='flex 
									basis-full
									h-16
									sticky
									top-0
									bg-orange-300
									justify-center
									space-x-4
									p-4 z-10'
		>
			<h1 className='overflow-clip font-bold border-2 border-solid border-purple-600  '>
				This is a Header!
			</h1>
			<button
				onClick={props.click}
				className='md:invisible border-2 border-solid border-gray-700 rounded px-1 '
			>
				Ok!
			</button>
		</header>
	);
}
