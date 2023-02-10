"use client";
import { useRef } from "react";
import { useEffect } from "react";

export default function Footer({ children }) {
	const footerRef = useRef(null);

	useEffect(() => {
		const footerHeight = footerRef.current.offsetHeight;
		document.documentElement.style.setProperty(
			"--footer-offset",
			`${footerHeight}px`
		);
	});

	return (
		<footer
			ref={footerRef}
			className='footer'
		>
			{children}
		</footer>
	);
}
