import { Counter } from "./counter"
import { PurchaseProductItem } from "./PurchaseProductItem"
import Test from "./test"
import { TextEffect } from './testEffect'
import { NavLink } from "react-router"
// import TestContextProvider from "./context/TextContextProvider"

export function App() {
  return (
    <>
    {/* <TestContextProvider>
      <h1>This is test provider</h1>
    </TestContextProvider> */}
    <NavLink to="/test">Got to Test Page</NavLink>
    <Counter />
    <TextEffect />
    <PurchaseProductItem />
    </>
  )
}
