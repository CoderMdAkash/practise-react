import ReactDOM from "react-dom/client"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from 'react-router/dom'
import Layout from './project/layout/layout'
import Home from './project/home'
import About from './project/about'
import Experience from './project/experience'
import Projects from './project/projects'
import Contact from './project/contact'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "experience",
                element: <Experience />
            },
            {
                path: "projects",
                element: <Projects />
            },
            {
                path: "contact",
                element: <Contact />
            },
        ]
    }
])

const root = document.getElementById("app")

ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />
)
