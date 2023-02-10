"use client";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import { useState } from "react";
import Link from "next/link";

export default function Main() {
	const [expanded, setExpanded] = useState(false);

	const clickHandler = () => {
		setExpanded(!expanded);
	};

	return (
		<>
			<Header click={clickHandler}>...and Then There Were 2</Header>
			<div className='flex-grow flex md:flex-row lg:w-[90%] md:mx-auto'>
				<Sidebar expanded={expanded}>
					<Link href='/home'>Forward</Link>
				</Sidebar>
				<main className='md:basis-3/4 2xl:basis-5/6 bg-sky-900'>
					<section>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
							consectetur consequuntur sequi aliquam cupiditate doloribus
							aspernatur minus, error, quis facilis at nemo nihil adipisci natus
							eveniet dolorum. Adipisci, voluptates quam.
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
							consectetur consequuntur sequi aliquam cupiditate doloribus
							aspernatur minus, error, quis facilis at nemo nihil adipisci natus
							eveniet dolorum. Adipisci, voluptates quam.
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
							consectetur consequuntur sequi aliquam cupiditate doloribus
							aspernatur minus, error, quis facilis at nemo nihil adipisci natus
							eveniet dolorum. Adipisci, voluptates quam.
						</p>
					</section>
				</main>
			</div>
			<Footer>Footer</Footer>
		</>
	);
}
