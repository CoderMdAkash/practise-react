import ReactDOM from "react-dom/client"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router"
import { RouterProvider } from 'react-router/dom'
import Layout from './project/layout/layout'
import Home from './project/home'
import About from './project/about'
import Experience from './project/experience'
import Projects from './project/projects'
import Contact from './project/contact'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />} >
            <Route path='' element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='experience' element={<Experience/>} />
            <Route path='projects' element={<Projects/>} />
            <Route path='contact' element={<Contact/>} />
        </Route>
    )
)

const root = document.getElementById("app")

ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />
)
