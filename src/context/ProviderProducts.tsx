import React from "react"
import { ProductsProvider } from "./productsContext"

const ProviderProducts = ({children}: {children: React.ReactNode}) => {
  return (
    <ProductsProvider>
        {children}
    </ProductsProvider>
  )
}

export default ProviderProducts