export default function Corner({ flipped = false }: { flipped?: boolean }) {
	return (
		<div className={flipped ? "rotate-180" : ""}>
			<div className="border-l-2 border-t-2 border-teal-300 w-10 h-10"></div>
		</div>
	);
}
