import React from 'react'

export default ({ brand }) => {
  const brandData = brand.fields || false
  return brandData ? (
    <div>
      <a href={brandData.website}>
        <h3>{brandData.companyName}</h3>
        <p>{brandData.companyDescription}</p>
      </a>
    </div>
  ) : null
}
