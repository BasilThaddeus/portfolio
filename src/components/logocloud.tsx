import {
	SiNextdotjs,
	SiReact,
	SiJavascript,
	SiHtml5,
	SiPython,
	SiCss3,
} from "react-icons/si";

export default function LogoCloud() {
	return (
		<>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="text-center text-3xl leading-8 text-white">
					Experienced In
				</h2>
				<div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6 text-slate-300">
					<div className="group flex flex-col">
						<SiNextdotjs className="group-hover:scale-150 group-hover:text-white col-span-2 max-h-12 w-full object-contain lg:col-span-1 h-full transition-all " />
						<span className="opacity-0 group-hover:opacity-100 transition-all flex justify-center mt-6 text-lg">
							NextJS
						</span>
					</div>
					<div className="group flex flex-col">
						<SiReact className="group-hover:scale-150 group-hover:text-white col-span-2 max-h-12 w-full object-contain lg:col-span-1 h-full transition-all " />
						<span className="opacity-0 group-hover:opacity-100 transition-all flex justify-center mt-6 text-lg">
							ReactJS
						</span>
					</div>
					<div className="group flex flex-col">
						<SiJavascript className="group-hover:scale-150 group-hover:text-white col-span-2 max-h-12 w-full object-contain lg:col-span-1 h-full transition-all " />
						<span className="opacity-0 group-hover:opacity-100 transition-all flex justify-center mt-6 text-lg">
							JavaScript
						</span>
					</div>
					<div className="group flex flex-col">
						<SiHtml5 className="group-hover:scale-150 group-hover:text-white col-span-2 max-h-12 w-full object-contain lg:col-span-1 h-full transition-all " />
						<span className="opacity-0 group-hover:opacity-100 transition-all flex justify-center mt-6 text-lg">
							HTML5
						</span>
					</div>
					<div className="group flex flex-col">
						<SiPython className="group-hover:scale-150 group-hover:text-white col-span-2 max-h-12 w-full object-contain lg:col-span-1 h-full transition-all " />
						<span className="opacity-0 group-hover:opacity-100 transition-all flex justify-center mt-6 text-lg">
							Python3
						</span>
					</div>
					<div className="group flex flex-col">
						<SiCss3 className="group-hover:scale-150 group-hover:text-white col-span-2 max-h-12 w-full object-contain lg:col-span-1 h-full transition-all " />
						<span className="opacity-0 group-hover:opacity-100 transition-all flex justify-center mt-6 text-lg">
							CSS3
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
