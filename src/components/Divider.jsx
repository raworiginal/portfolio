function Divider({ title }) {
	return (
		<div className="flex w-full p-6 flex-col">
			<div className="divider divider-primary">
				<h1 className="text-5xl font-bold">{title}</h1>
			</div>
		</div>
	);
}
export default Divider;
