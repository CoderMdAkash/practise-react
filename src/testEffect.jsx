import { useRef, useState, useEffect, useCallback } from "preact/hooks"

export function TextEffect() {

  const [text, setText] = useState('')
  const [textInput, setTextInput] = useState('')
  const [addCheck, setAddCheck] = useState(false)
  const refText = useRef(null)

  const textGen = useCallback(() => {
    let newText = textInput
    if(addCheck){
        setText(Number(newText) + 100)
    }else{
        setText(newText)
    }
  }, [setText, textInput, addCheck, text])

  const clickTextRef = () => {
    window.navigator.clipboard.writeText(text)
    refText.current?.select()
  }

  useEffect(() => {
    textGen()
  }, [textGen, addCheck, text])

  return (
    <>
        <div>This is input text : { text }</div>
        <input value={ textInput } 
        type="number" 
        onInput={ (e) => setTextInput(e.target.value) } 
        ref={ refText }
         /> <br />
         Add (+100) Check : <input type="checkbox" 
         defaultChecked={ addCheck } 
         onChange={ () => setAddCheck( (prev) => !prev) } 
         /><br />
         <button onClick={ clickTextRef }>copy</button>
    </>
  )
}
