function Navbar() {
	return (
		<nav className="navbar sticky top-0 z-50 border-b-4 border-secondary bg-base-100 shadow-sm">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">Randall Wolfe</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<div className="hidden md:flex">
						<li>
							<a className="btn btn-ghost btn-secondary">About</a>
						</li>
						<li>
							<a className="btn btn-ghost btn-secondary">Projects</a>
						</li>
						<li>
							<a className="btn btn-ghost btn-secondary">Blog</a>
						</li>
					</div>
					<li className="md:hidden">
						<details>
							<summary className="btn btn-ghost btn-secondary">Links</summary>

							<ul className="bg-base-100 rounded-t-none p-2">
								<li>
									<a className="btn btn-ghost btn-secondary">About</a>
								</li>
								<li>
									<a className="btn btn-ghost btn-secondary">Projects</a>
								</li>
								<li>
									<a className="btn btn-ghost btn-secondary">Blog</a>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
		</nav>
	);
}
export default Navbar;
