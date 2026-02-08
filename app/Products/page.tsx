import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Products from '../components/Products'
import DetailProducts from '../components/DetailProducts'

const ProductsPage = () => {
  return (
    <div>
      <Navigation/>
      <br /><br />
    <DetailProducts/>

      <Footer/>
    </div>
  )
}

export default ProductsPage
