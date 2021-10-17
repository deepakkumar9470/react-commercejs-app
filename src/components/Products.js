import React from 'react'
import Product from './Product/Product'
import {Grid,Container} from '@mui/material'


import Header from '../components/Header/Header'

const Products  = ({addProduct,categories,products}) => {
     
    return (
        <div>
            <Header/>
            <Container id="products">
                <Grid container spacing={4}>
                {products.map((product) => {
                    return (
                        <Grid item xs={12} sm={6} md={4}>
                           <Product 
                              product={product} 
                              addProduct={addProduct} 
                              categories={categories}/>
                              
                        </Grid>
                    )
                })}
                </Grid>    
           
        </Container>

        </div>

        
    )
}

export default Products