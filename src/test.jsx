import { useId } from "preact/hooks";
import { NavLink } from "react-router"

function Test() {
    return ( 
        <>
        <NavLink to="/">Got to Home Page</NavLink>
        <h1>Hello World!</h1>
        </>
     );
}

export default Test;