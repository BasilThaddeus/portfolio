import Link from "next/link";
import Corner from "./corner";

let NAVBAR_ITEMS = [
	["Home", "/"],
	["Projects", "/#projects"],
	["Resume", "/Resume.pdf"],
	["Contacts", "/#contacts"],
];

export default function Navbar({ pageLocation }: { pageLocation: string }) {
	return (
		<>
			<Corner />
			<div className="flex justify-center">
				{NAVBAR_ITEMS.map(([name, link]) =>
					Navitem([name, link], pageLocation)
				)}
			</div>
		</>
	);
}

function Navitem([name, link]: string[], location: string) {
	return (
		<Link
			href={link}
			className={
				location === name
					? "text-lg text-teal-300 mx-4 md:mx-10"
					: "text-lg text-white mx-4 md:mx-10"
			}
			key={name}
			target={name == "Resume" ? "_blank" : ""}
		>
			{name}
		</Link>
	);
}
