import React from 'react'
import './style.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ShoppingCart } from "@mui/icons-material";

const Product = ({product,addProduct}) => {
     
    return (
              <div> 
                     <Card xs={{ maxWidth: 300 }}>
                        <CardMedia
                          component="img"
                          height="150"
                          image={product.image.url}
                          alt="itemimage"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                          {product.name}
                          </Typography>
                          
                        </CardContent>
                          <CardActions>
                            <>
                            <Typography className="price" gutterBottom variant="h5" component="h2">
                                {product.price.formatted_with_symbol}
                            </Typography>

                            <Button
                              size="large"
                              className="custom-button"
                              onClick={() => {addProduct(product.id,1)}}
                            >
                              <ShoppingCart /> Add to Cart
                              </Button>
                            </>
                              
                          </CardActions>



                      </Card>
                    
                  </div>
        )
}

export default Product
