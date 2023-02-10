export default function Card({ style, children }) {
	return (
		<div className={`card shadow-lg shadow-stone-700 p-4 ${style}`}>
			{children}
		</div>
	);
}
