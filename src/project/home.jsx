import Hero from "./components/hero";
import AboutComponent from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import TestContextProvider from "../context/TestContextProvider";
import Test from "../test";
import TodoList from "../todo/todoList";
import { Provider } from "react-redux";
import {store} from '../app/store'

function Home() {
    return (
        <>
        <h1 className="text-white text-2xl">Hello</h1>
            {/* <Hero />
            <AboutComponent />
            <Experience />
            <Projects />
            <Contact /> */}
            {/* <TestContextProvider><Test /></TestContextProvider> */}
            <Provider store={store}>
                <TodoList />
            </Provider>
        </>
    );
}

export default Home;