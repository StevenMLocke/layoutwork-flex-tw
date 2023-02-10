import Card from "@/components/Card";

export default function Home() {
	const codeblock = `'"use client";
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
						<Link href='/'>Back</Link>
					</Sidebar>

					<main>{children}</main>
				</div>
				<Footer>Footer</Footer>
			</>
		);
	}'`;

	return (
		<section className='flex flex-wrap gap-4 mx-auto justify-around'>
			<div className='card flex-1 shadow-md shadow-slate-400 basis-20 my-4'>
				<div className='card-body'>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
						consectetur consequuntur sequi aliquam cupiditate doloribus
						aspernatur minus, error, quis facilis at nemo nihil adipisci natus
						eveniet dolorum. Adipisci, voluptates quam.
					</p>
				</div>
			</div>
			<div className='card flex-1 shadow-md shadow-slate-400 basis-20 my-4'>
				<div className='card-body'>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
						consectetur consequuntur sequi aliquam cupiditate doloribus
						aspernatur minus, error, quis facilis at nemo nihil adipisci natus
						eveniet dolorum. Adipisci, voluptates quam.
					</p>
				</div>
			</div>
			<div className='card flex-1 shadow-md shadow-slate-400 basis-20 my-4'>
				<div className='card-body'>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
						consectetur consequuntur sequi aliquam cupiditate doloribus
						aspernatur minus, error, quis facilis at nemo nihil adipisci natus
						eveniet dolorum. Adipisci, voluptates quam.
					</p>
				</div>
			</div>
		</section>
	);
}
