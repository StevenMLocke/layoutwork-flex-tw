"use client";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRef } from "react";

export default function Main({ children }) {
	const [expanded, setExpanded] = useState(false);

	const clickHandler = () => {
		setExpanded(!expanded);
	};

	return (
		<>
			<Header click={clickHandler}>...and Then There Were 2</Header>
			<div className='flex-grow flex md:flex-row w-full lg:w-[90%] md:mx-auto '>
				<Sidebar expanded={expanded}>
					<Link
						className='link'
						href='/'
					>
						Back
					</Link>
				</Sidebar>
				{children}
			</div>
			<Footer>Footer</Footer>
		</>
	);
}
