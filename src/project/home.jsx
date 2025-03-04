import Hero from "./components/hero";
import AboutComponent from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import TestContextProvider from "../context/TestContextProvider";
import Test from "../test";

function Home() {
    return (
        <>
        <h1 className="text-white text-2xl">Hello</h1>
            {/* <Hero />
            <AboutComponent />
            <Experience />
            <Projects />
            <Contact /> */}
            <TestContextProvider><Test /></TestContextProvider>
        </>
    );
}

export default Home;