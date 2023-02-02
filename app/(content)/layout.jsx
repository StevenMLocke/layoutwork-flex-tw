"use client";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import { useState } from "react";
import Link from "next/link";

export default function Main({ children }) {
	const [expanded, setExpanded] = useState(false);

	const clickHandler = () => {
		setExpanded(!expanded);
	};

	return (
		<>
			<div className='flex flex-wrap min-h-screen content-start'>
				<Header click={clickHandler}>...and Then There Were 2</Header>
				<Sidebar expanded={expanded}>
					<Link href='/'>Back</Link>
				</Sidebar>
				<main className='min-w-full md:min-w-[75%] bg-sky-900 flex-1 '>
					{children}
				</main>
			</div>
			<Footer>Footer</Footer>
		</>
	);
}
