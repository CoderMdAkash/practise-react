import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router";

function Loyout() {
    return ( 
        <>
        <div className="font-[Poppins]">
        {/* <div className="bg-[#06021a] font-[Poppins]"> */}
            {/* <Header /> */}
            <Outlet />
            {/* <Footer /> */}
        </div>
        </>
     );
}

export default Loyout;