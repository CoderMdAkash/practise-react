import { useLoaderData, useParams } from "react-router";
import Testchild from "./testchild";
import { useContext, useState } from "preact/hooks";
import TestContext from './context/TestContext';


// window.globalVar = "Global Variable";

function Test() {
    const { testId, opId } = useParams()
    const githubProfile = useLoaderData()
    const [dumpData, setDumpData] = useState('change test data')

    const {testData, setTestData} = useContext(TestContext)

    // const globalChange = () => {
    //     window.globalVar = window.globalVar === "Global Variable" ? "Changed Global Variable" : "Global Variable";
    //     window.dispatchEvent(new Event("globalVarChange")); // Notify children
    // }
    const globalChange = () => {
        setTestData((prevData) =>
            prevData === "initial test value"
                ? dumpData
                : "initial test value"
        )
    }
    
    return ( 
        <>
        <h1>Hello World!</h1>
        <h1>User Id : {testId}</h1>
        <h1>opId Id : {opId}</h1>
        <h1>Github Profile Followers : {githubProfile && githubProfile.followers}</h1>
        <Testchild />
        <button onClick={globalChange} className="bg-amber-700 border-2 text-white">Click Here</button>
        </>
     );
}

export default Test;

export const githubProfileLoader = async () => {
    const data = await fetch('https://api.github.com/users/alaminone')
    return data.json()
}