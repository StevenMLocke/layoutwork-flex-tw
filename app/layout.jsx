import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body
				className=' w-full
										2xl:w-7/12
										m-auto
										min-h-screen'
			>
				{children}
			</body>
		</html>
	);
}
