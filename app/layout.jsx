import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			data-theme='luxury'
		>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body
				className=' w-full
										m-auto
										min-h-screen
										flex
										flex-col'
			>
				{children}
			</body>
		</html>
	);
}
