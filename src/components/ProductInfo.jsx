import React from 'react'

const ProductInfo = () => {
    const name ="Laptop"
    const price ="$1200"
    const availability = "In stock"
  return (
    <div>
        <p>product: {name}</p>
        <p>price: {price}</p>
        <p>availability: {availability}</p>
    </div>
  )
}

export default ProductInfo