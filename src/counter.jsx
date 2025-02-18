import { useState } from "preact/hooks"

export function Counter() {

  const [counter, setIncreaseCounter] = useState(10)

  const increaseCounter = () => {
    setIncreaseCounter(prevCounter => prevCounter + 1)
  }
  const decreaseCounter = () => {
    setIncreaseCounter(counter - 1)
  }

  return (
    <>
    <button onClick={ decreaseCounter }>Decrease - </button>
    <button onClick={ increaseCounter }>Increase +</button>
      <h1>Counter : { counter }</h1>
    </>
  )
}
