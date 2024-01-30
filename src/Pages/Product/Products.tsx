import React, { useState } from 'react'
import Layout from '../../Layout/app/Layout'
import ProductsHeader from './ProductsHeader';
import ProductsFilter from './ProductsFilter';
import ProductsCards from './ProductsCards';
import ProductPagination from './ProductPagination';

const Products = () => {

  const [style, setstyle] = useState(false)
  const Props = { style, setstyle }
  return (
    <Layout className='Products'>
      <ProductsHeader {...Props} />
      <div className='Products_Body'>
        <ProductsFilter />
          <ProductsCards {...Props} />
      </div>
    </Layout>
  )
}

export default Products