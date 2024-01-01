import Button from "./button";

const PROJECTS = [
	[
		"ECEUSC",
		"Using NextJS, React, and TailwindCSS, this website was built to attract UCSD students to the ECE Undergraduate Student Council. With a responsive design, this website is friendly to users on any device.",
		"https://eceusc.ucsd.edu/",
	],
];

export default function Projects() {
	return (
		<>{PROJECTS.map(([name, desc, link]) => ProjectItem([name, desc, link]))}</>
	);
}

function ProjectItem([projectName, desc, link]: string[]) {
	return (
		<div key={projectName}>
			<div className="lg:flex border border-teal-600 p-2 lg:p-6">
				<div className="m-auto mx-6 my-4">
					<span className="text-2xl">{projectName}</span>
				</div>
				<div className="m-auto mx-6 my-4">
					<span className="text-lg">{desc}</span>
				</div>
				<div className="m-auto text-center lg:text-left my-6">
					<Button link={link} target="_blank">
						Link
					</Button>
				</div>
			</div>
		</div>
	);
}
