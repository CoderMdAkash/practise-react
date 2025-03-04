import { useContext, useEffect, useState } from "preact/hooks";
import TestContext from "./context/TestContext";

function Testchild() {

    // const [globalValue, setGlobalValue] = useState(window.globalVar);
    const {testData} = useContext(TestContext)

    // const {testData} = useContext(TestContext)

    // useEffect(() => {
    //     // Update state when the global variable changes
    //     const handleGlobalChange = () => {
    //         setGlobalValue(window.globalVar);
    //     };

    //     window.addEventListener("globalVarChange", handleGlobalChange);
        
    //     return () => {
    //         window.removeEventListener("globalVarChange", handleGlobalChange);
    //     };
    // }, []);
    
    return ( 
        <>
        <h1>This is Test Child -- {testData}</h1>
        </>
     );
}

export default Testchild;
