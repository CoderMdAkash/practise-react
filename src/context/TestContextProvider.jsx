import { useState } from "preact/hooks";
import TestContext from "./TestContext";

const TestContextProvider = ({children}) => {
    const [testData, setTestData] = useState('initial test value')
    return(
        <TestContext.Provider value={{testData, setTestData}}>
        {children}
        </TestContext.Provider>
    )
}

export default TestContextProvider