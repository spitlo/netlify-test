import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ products }) => (
  <div>
    <h1>Products.</h1>
    <ul>
      {products.map(({ fields: product }) => (
        <li key={product.sku}>
          <Link to={`/products/${product.slug}/`}>{product.productName}</Link>
        </li>
      ))}
    </ul>
  </div>
))
