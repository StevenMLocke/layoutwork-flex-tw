"use client";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { useState } from "react";

export default function Main() {
	const [expanded, setExpanded] = useState(false);

	const clickHandler = () => {
		setExpanded(!expanded);
		console.log(expanded);
	};

	return (
		<>
			<div
				className='flex
										flex-wrap
										min-h-screen
										content-start'
			>
				<Header click={clickHandler}></Header>
				<Sidebar expanded={expanded}></Sidebar>
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
