import { Counter } from "./counter"
import { PurchaseProductItem } from "./PurchaseProductItem"
import Test from "./test"
import { TextEffect } from './testEffect'
import { NavLink } from "react-router"

export function App() {
  return (
    <>
    <NavLink to="/test">Got to Test Page</NavLink>
    <Counter />
    <TextEffect />
    <PurchaseProductItem />
    </>
  )
}
