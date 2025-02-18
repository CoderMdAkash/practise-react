import { useState, useEffect } from "preact/hooks"

export function PurchaseProductItem() {

  const [productItems, setProductItems] = useState([''])
  const [price, setPrice] = useState([''])
  const [totalPrice, setTotalPrice] = useState(0)
  const [taxCheck, setTaxCheck] = useState(false)

  const addNewProduct = () => {
    setProductItems(prevItems => [...prevItems, ''])
    setPrice((prevPrices) => [...prevPrices, ""]);
  }

  const handlePriceChange = (index, value) => {
    const updatedPrices = [...price]
    updatedPrices[index] = value.replace(/[^0-9.]/g, "")
    setPrice(updatedPrices)
  }

  const removeProductItem = (index) => {
    setProductItems((prevItems) => prevItems.filter((item, i) => i !== index))
    setPrice((prevPrices) => prevPrices.filter((item, i) => i !== index))
  }

  const calculateTotalPrice = () => {
    let totalPrice = price.reduce((acc, item) => acc + (Number(item) || 0), 0);

    if(taxCheck && totalPrice != 0){
      totalPrice += totalPrice * 0.1
    }
    setTotalPrice(totalPrice)
  }

  useEffect(() => {
    calculateTotalPrice()
  }, [price, taxCheck])

  return (
    <>
      <h1>New Purchase</h1>
      <div>Total Product Price : { totalPrice.toFixed(2) }</div><br />

      <div className="product-list">
      {productItems.length > 0 ? (
        productItems.map((item, index) => (
          <div key={index}>
            Item { index + 1 } : <input value={ price[index] } 
            type="number" 
            onInput={ (e) => handlePriceChange(index, e.target.value) }
            /> 
            &nbsp;<button onClick={ () => removeProductItem(index) }>-</button><br /><br />
          </div>
        ))
      ) : (
        <p style={{ color: '#f00' }}>No items available. Please add a product.</p>
      )}
      </div>
      <br />

      <div>
        <button onClick={ addNewProduct }>Add New+</button>
      </div>
      <br />

      <div>
        Calculate Vat (10%): <input type="checkbox" 
        defaultChecked={ taxCheck } 
        onChange={ () => setTaxCheck( (prev) => !prev) } 
        /><br />
      </div>
      <br />

      <div>
        <button type="button">Submit</button>
      </div>
    </>
  )
}
