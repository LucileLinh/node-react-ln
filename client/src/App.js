import React, { useState, useEffect } from "react"
import productService from "./services/productService"
import ContentContainer from "./components/ContentContainer/ContentContainer"
import Search from "./components/Search/Search"
import * as data from "./services/mockedData/sizes.json"
const dataInfo = [
  { title: "bundle size", label: "minified", unit: "kb", text: 900 },
  { title: "download time", label: "edge", unit: "s", text: 15 },
]

function App() {
  const [products, setproducts] = useState(null)

  useEffect(() => {
    if (!products) {
      getProducts()
    }
  })

  const getProducts = async () => {
    let res = await productService.getAll()
    console.log(res)
    setproducts(res)
  }

  const renderProduct = product => {
    return (
      <li key={product._id} className="list__item product">
        <h3 className="product__name">{product.name}</h3>
        <p className="product__description">{product.description}</p>
      </li>
    )
  }

  return (
    <div className="App">
      <div className="page-container">
        <p>abc</p>
        <Search />
        <ContentContainer dataInfo={dataInfo} data={data} />
      </div>
      {/* <ul>
          {products && products.length > 0 ? (
            products.map(product => renderProduct(product))
          ) : (
            <p>No products found</p>
          )}
        </ul> */}
    </div>
  )
}

export default App
