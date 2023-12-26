export default function Section({
	children,
	id,
	color = 1,
}: {
	children: any;
	id?: string;
	color?: number;
}) {
	return (
		<div
			className={
				color == 1
					? "w-4/5 p-4 m-auto text-white md:w-4/5 md:border-teal-600 md:border-2 mt-10 md:p-10 lg:w-3/4"
					: "w-4/5 p-4 m-auto text-white md:w-4/5 md:border-sky-600 md:border-2 mt-10 md:p-10 lg:w-3/4"
			}
			id={id ? id : ""}
		>
			{children}
		</div>
	);
}
