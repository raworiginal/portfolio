function ProjectCard({ project }) {
	return (
		<article className="h-vh">
			<div className="min-h-full relative card glass card-lg bg-base-100 w-96 shadow-sm hover:shadow-secondary hover:shadow-xl">
				<figure className="p-4">
					<div
						className="bg-cover bg-top bg-no-repeat bg-center h-48 w-full"
						style={{ backgroundImage: `url(${project.image})` }}></div>
				</figure>
				<div className="card-body">
					<a href={project.githubLink} target="_blank">
						<span className="absolute inset-0"></span>
						<h2 className="card-title">{project.title}</h2>
					</a>
					<p>{project.description}</p>
					<div className="card-actions justify-center">
						{project.techStack.map((tech) => (
							<div className="badge badge-outline">{tech}</div>
						))}
					</div>
				</div>
			</div>
		</article>
	);
}
export default ProjectCard;
