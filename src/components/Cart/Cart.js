import { Grid, Button, Container,Typography } from "@mui/material";

import CartItem from './CartItem/CartItem'

import "./style.css";

const Cart = ({basketData,handleEmptyBasket,removeItemsFromBasket,addProduct,updateCartItem}) => {


   if(!basketData.line_items || !basketData.line_items.length) return 'Loading..'
  
  return (
    <Container id="basket">
      <Grid container justify="center" spacing={4}>
        <Typography variant="subbody1" color="primary">Your cart items :</Typography>
        {basketData.line_items.map((item) => {
          return (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <CartItem
                basket={basketData}
                removeItemsFromBasket={removeItemsFromBasket}
                addProduct={addProduct}
                item={item}
                updateCartItem={updateCartItem}
                
              />
              
            </Grid>
          );
        })}
      </Grid>
      <div className="actions">
        <Button
          size="small"
          color="secondary"
          variant="contained"
          onClick={handleEmptyBasket}
        >
          Empty Basket
        </Button>

      </div>
    </Container>
  );
};

export default Cart;