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
			<div className='flex flex-wrap min-h-screen content-start'>
				<Header click={clickHandler}>This is the Beginning</Header>
				<Sidebar expanded={expanded}>
					<Link href='/home'>Forward</Link>
				</Sidebar>
				<main className='min-w-full md:min-w-[75%] bg-sky-900 flex-1 '>
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
