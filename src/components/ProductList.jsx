import React from 'react'

const ProductList = () => {
    const products =[
        {id: 1, name: "Phone", price: "$699"},
        {id: 2, name: "Laptop", price: "$1200"},
        {id: 3, name: "Headphones", price: "$199"},
    ]
  return (
    <div>
        {products.map(({id, name, price})=>
        <ul key={id}>
            <li key={id}>{id}</li>
            <li key={name}>{name}</li>
            <li key={price}>{price}</li>
        </ul>
        )}
    </div>
  )
}

export default ProductList