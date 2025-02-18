import Hero from "./components/hero";
import AboutComponent from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";

function Home() {
    return (
        <>
            <Hero />
            <AboutComponent />
            <Experience />
            <Projects />
            <Contact />
        </>
    );
}

export default Home;