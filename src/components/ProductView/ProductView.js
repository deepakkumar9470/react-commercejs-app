
import React,{useState,useEffect} from 'react'
import {Container,Grid,Button, Typography } from '@mui/material';

import './style.css'
import {commerce} from '../../lib/Commerce'
import { ShoppingCart } from "@mui/icons-material";

const createMarkup = (text) =>{
    return {__html : text};
}

const ProductView = ({addProduct}) => {

   const [product, setProduct] = useState({})
   const [quantity, setQuantity] = useState(1)

   const fetchProducts = async (id) =>{
    try {
        const res = await commerce.products.retrieve(id)
        console.log(res)
        const {name,price,image,quantity,description} = res

        setProduct({
            id,
            name,
            quantity,
            description,
            src : image.url,
            price : price.formatted_with_symbol,   
        })

    } catch (error) {
      console.log(error)
    } 
   }

   const handleQuantity = (param) =>{
       if(param === 'decrease' && quantity >1){
           setQuantity(quantity - 1)
       }
       if(param === 'increase' && quantity < 10){
        setQuantity(quantity + 1)
    }
   }


   useEffect(() => {
       const id = window.location.pathname.split('/')
      fetchProducts(id[2])
   }, [])
    return (
        <Container className="product-view">

            <Grid container spacing={4}>

                <Grid item xs={12} md={8} className="image-wrapper">
                    <img src={product.src} alt={product.name}/>
                </Grid>


                <Grid item xs={12} md={4} className="text">
                   <Typography variant="h2" className="quantity">{product.name}</Typography>
                   <Typography variant="p" className="quantity"
                   dangerouslySetInnerHTML={createMarkup()}>{product.description}</Typography>
                   <Typography variant="h3" className="quantity">{product.quantity}</Typography>
                  <Grid container spacing={4}>
                     <Grid item xs={12}>
                       <Button size="small" variant="contained" 
                          className="increase-qty"
                          onClick={() => handleQuantity('decrease')}>-

                       </Button>
                     </Grid>
                  <Grid item xs={12} md={4}>
                     <Typography variant="h3" className="quantity">Quantity: {quantity}</Typography>
                  
                   </Grid> 
                   <Grid item xs={12}>
                       <Button size="small" variant="contained" className="" color="secondary"
                       onClick={() => handleQuantity('increase')}>+

                       </Button>
                     </Grid>

                     <Grid item xs={12}>
                       <Button size="large" variant="contained" 
                       className="custom-button" color="secondary"
                       onClick={() => addProduct(product.id,quantity )}>
                          <ShoppingCart/> Add to Cart
                       </Button>
                     </Grid>

                    </Grid> 
                </Grid>
            </Grid>
             
        </Container>
    )
}

export default ProductView
