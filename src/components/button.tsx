import Link from "next/link";

export default function Button({
	children,
	link,
	target,
}: {
	children: any;
	link: string;
	target?: string;
}) {
	return (
		<div className="mx-6 md:mx-14 bg-teal-600 rounded-lg">
			<Link href={link} target={target ? target : ""}>
				<div className="p-4 rounded-lg border border-teal-600 hover:border-teal-400 hover:bg-slate-900 transition-all hover:-translate-x-1 hover:-translate-y-1">
					{children}
				</div>
			</Link>
		</div>
	);
}
