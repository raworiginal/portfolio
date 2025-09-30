import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Divider from "./components/Divider";

function App() {
	return (
		<>
			<Navbar />
			<Landing />
			<Divider title={"Projects"} />
			<Projects />
			<Divider title={"About Me"} />
			<About />
		</>
	);
}

export default App;
