import { NavLink } from "react-router"

function Header() {
    const toggleMobileTab = () => {
        document.getElementById('mobile-menu').classList.toggle('-translate-x-full')
    }
return (
<>
    <nav className="bg-[#21212e] py-3 md:flex md:items-center md:justify-between">
        <NavLink to="/">
            <div className="flex items-center justify-between mx-10 my-2">
                <img src="img/hero-img.png" className="select-none h-[40px] w-[40px]" alt="Logo" />
                <span className="-mx-[1px] text-2xl cursor-pointer text-[#793fff] px-[10px]"><b>Akash</b></span>
                <button className="text-3xl cursor-pointer text-[#fffffff1] md:hidden block" onClick={() => toggleMobileTab()}>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
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
                <NavLink to="/contact"
                    className="bg-[#793fff] shadow-lg shadow-[#793fff]/30 text-white h-18 px-4 p-2 rounded-lg">
                    👋 Contact
                </NavLink>
            </li>
        </ul>
    </nav>



    <nav id="mobile-menu"
        className="fixed inset-0 bg-white text-black transform transition-transform duration-300 md:hidden z-[999999] shadow-xl rounded-lg overflow-hidden -translate-x-full">
        <div class="flex flex-col h-full">
            <div class="flex flex-row justify-between items-center p-6 border-b border-gray-200">
                <NavLink to="/" onClick={() => toggleMobileTab()}>
                    <div className="flex items-center justify-between mx-10 my-2">
                        <img src="img/hero-img.png" className="select-none h-[40px] w-[40px]" alt="Logo" />
                        <span className="-mx-[1px] text-2xl cursor-pointer text-[#793fff] px-[10px]"><b>Akash</b></span>
                    </div>
                </NavLink>
                <div id="menu-close" class="cursor-pointer" onClick={() => toggleMobileTab()}>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 17">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l15 15M16 1L1 16" />
                    </svg>
                </div>
            </div>

            <ul class="flex-1 flex flex-col  max-h-[calc(100vh-150px)] overflow-y-auto  py-4" onClick={() => toggleMobileTab()}>
                <li>
                    <NavLink to="/" className="block px-6 py-3 border-b text-xl border-gray-300">Home</NavLink>
                </li>
                <li>
                    <NavLink to="about" className="block px-6 py-3 border-b text-xl border-gray-300">About</NavLink>
                </li>
                <li>
                    <NavLink to="experience" className="block px-6 py-3 border-b text-xl border-gray-300">Experience</NavLink>
                </li>
                <li>
                    <NavLink to="projects" className="block px-6 py-3 text-xl">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="contact" className="block mx-3 py-3 text-xl bg-[#793fff] shadow-lg shadow-[#793fff]/30 text-white p-2 rounded-lg">👋 Contact</NavLink>
                </li>
            </ul>
        </div>
    </nav>
</>
);
}

export default Header;