import { NavLink } from "react-router"

function Header() {
    return ( 
        <>
            <nav className="bg-[#21212e] py-3 md:flex md:items-center md:justify-between">
                <NavLink to="/">
                    <div className="flex items-center justify-between mx-10 my-2">
                        <img src="img/hero-img.png" className="select-none h-[40px] w-[40px]" />
                        <span className="-mx-[1px] text-2xl cursor-pointer text-[#793fff] px-[10px]"><b>Akash.</b></span>
                        <span className="text-3xl cursor-pointer text-[#793fff] md:hidden block">
                            <ion-icon name="menu-outline"></ion-icon>
                        </span>
                    </div>
                </NavLink>
                <ul
                    className="md:flex md:items-center md:z-auto md:static bg-[#21212e] absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                    <li className="mx-4 my-4 md:my-0">
                        <NavLink to="/" className="text-white hover:text-[#793fff] duration-500">Home</NavLink>
                    </li>
                    <li className="mx-4 my-4 md:my-0">
                        <NavLink to="/about" className="text-white hover:text-[#793fff] duration-500">About</NavLink>
                    </li>
                    <li className="mx-4 my-4 md:my-0">
                        <NavLink to="/experience" className="text-white hover:text-[#793fff] duration-500">Experience</NavLink>
                    </li>
                    <li className="mx-4 my-4 md:my-0">
                        <NavLink to="/projects" className="text-white hover:text-[#793fff] duration-500">Projects</NavLink>
                    </li>
                    <li className="mx-4 my-4 md:my-0">
                        <NavLink to="/contact" className="bg-[#793fff] shadow-lg shadow-[#793fff]/30 text-white h-18 px-4 rounded-[5px] p-2 rounded-lg">
                            👋 Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
     );
}

export default Header;