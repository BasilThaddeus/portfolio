import Button from "@/components/button";
import Corner from "@/components/corner";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Section from "@/components/section";
import Link from "next/link";
import { FaLeaf, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
	return (
		<div className="md:m-4">
			<link rel="stylesheet" href="styles.css" />
			<>
				<Navbar pageLocation="Home" />

				<Section>
					<div className="flex">
						<div className="text-2xl text-gray-300 flex flex-col">
							<span className="text-xl mb-2 md:m-2">Hi! My name is</span>

							<div id="header" className="text-4xl md:mt-8 md:text-[5rem] h-16">
								<span className="md:hover:text-[6rem]">Basil</span>
								<span className="md:hover:text-[6rem]">Thaddeus.</span>
							</div>

							<div className="inline-block text-xl mt-2 xl:w-3/4 md:m-2 md:mt-8">
								<span>I am a Web Developer from </span>
								<span className="sparkle-1">Yerevan, Armenia </span>
								<span>and I am based in </span>
								<span className="sparkle-2">San Diego, California</span>
								<span>
									. Currently, I am an undergraduate at UC San Diego majoring in
									Cognitive Science with a specialization in Machine Learning.
									Check out some of my recent projects!
								</span>
								<div className="w-fit flex pt-8 m-auto">
									<Button link="/#projects">Projects</Button>
									<Button link="/Resume.pdf" target="_blank">
										Resume
									</Button>
								</div>
							</div>
						</div>
						<div className="hidden xl:block m-auto p-10 animate-[pulse_4000ms_ease-out_100ms_forwards_infinite] animate-pulse">
							<FaLeaf className="absolute text-green-500 text-[12rem]" />
							<FaLeaf className="absolute text-green-600 text-[12rem] translate-y-1 translate-x-1" />
							<FaLeaf className="text-green-700 text-[12rem] translate-y-2 translate-x-2" />
						</div>
					</div>
				</Section>

				<Section id="projects" color={2}>
					<div className="flex justify-center mb-10">
						<span className="text-4xl">Previous Projects</span>
					</div>
					<Projects />
				</Section>

				<div className="pt-8" id="contacts">
					<div className="flex justify-center text-4xl text-white">
						<Link href="https://github.com/BasilThaddeus" className="mx-4">
							<FaGithub />
						</Link>
						<Link
							href="https://www.linkedin.com/in/basilthaddeus/"
							className="mx-4"
						>
							<FaLinkedin />
						</Link>
						<Link href="mailto:basilthad@gmail.com" className="mx-4">
							<FaEnvelope />
						</Link>
					</div>
					<Corner flipped={true} />
				</div>
			</>
		</div>
	);
}
