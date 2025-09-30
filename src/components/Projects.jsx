import ProjectCard from "./ProjectCard";
function Projects() {
	const projects = {
		pop5: {
			title: "Pop 5!",
			image:
				"https://res.cloudinary.com/dl7x8mdbw/image/upload/v1759262377/POP5_bsieyh.png",
			description:
				"a full-stack social ranking app where users create topics and share their own Top 5 lists. You can browse topics, build your own list, search TMDB for movie metadata, and reorder your Top 5 with an intuitive UI.",
			techStack: ["React", "Flask", "PostgreSQL"],
			githubLink: "https://github.com/raworiginal/pop-5-front-end",
		},
		bleepr: {
			title: "Bleepr",
			image:
				"https://res.cloudinary.com/dl7x8mdbw/image/upload/v1759262381/Bleepo-transparent_qsyzle.svg",
			description:
				"A retro social platform with full CRUD for posts and comments, hashtag filtering for discovery, and profanity detection for safer engagement.",
			techStack: ["MongoDB", "Express", "React", "Node"],
			githubLink: "https://github.com/raworiginal/bleepr-react-front-end",
		},
		cryptidex: {
			title: "Crytidex",
			image:
				"https://res.cloudinary.com/dl7x8mdbw/image/upload/v1759262372/cryptidex-landing_dzbziq.png",
			description:
				"A MEN stack app for cataloging community-submitted monsters, powers, and attacks with full CRUD across multiple models. Implemented EJS server-side rendering and PicoCSS-styled UI",
			techStack: ["MongoDB", "Express", "Node", "EJS"],
			githubLink: "https://github.com/raworiginal/cryptidex",
		},
		masterMind: {
			title: "MasterMind",
			image:
				"https://res.cloudinary.com/dl7x8mdbw/image/upload/v1759262359/full-game-screenshot_l1mjl4.png",
			description:
				"A Wordle-style deduction game in HTML, CSS, and JavaScript where players guess a 4-color sequence. Responsive CSS Grid UI, and interactive sound design.",
			techStack: ["HTML", "CSS", "Javascript"],
			githubLink: "https://github.com/raworiginal/masterind",
		},
	};

	return (
		<div className="flex flex-wrap justify-center gap-4 sm:max-w-1/2 m-auto">
			<ProjectCard project={projects.pop5} />
			<ProjectCard project={projects.bleepr} />
			<ProjectCard project={projects.cryptidex} />
			<ProjectCard project={projects.masterMind} />
		</div>
	);
}
export default Projects;
