import {Card,CardMedia,CardContent,CardActions,Typography,CardActionArea,Button,} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import useStyles from './styles';
import {Link} from 'react-router-dom'
  const CartItem = ({item,basket,removeItemsFromBasket,addProduct,updateCartItem}) => {
      
      const classes = useStyles()

      
    return (
      
      <Card className="custom-card">
        <Link to={`product-view/${item.id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="260"
            className={classes.cardImage}
            image= {item.image.url}
            title="Contemplative Reptile"
            />
          <CardContent className="content">
            <Typography
              className="title"
              gutterBottom
              variant="h5"
              component="h2"
              >
              {item.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Typography variant="h3" className={classes.view}>View</Typography>
      </Link>
    
        {basket && (
          <CardActions>
            <Typography
              className="basket-item-price"
              gutterBottom
              variant="h5"
              component="h2"
            >
              {item.price.formatted_with_symbol}
            </Typography>
          </CardActions>
        )}
        <CardActions className="actions-content">
          {!basket && (
            <>
              <Typography
                className="price"
                gutterBottom
                variant="h5"
                component="h2"
              >
                {item.price.formatted_with_symbol}
              </Typography>
              <Button
                size="large"
                className="custom-button"
                onClick={() => {
                  addProduct(item.id, 1);
                }}
              >
                <ShoppingCart /> Add to basket
              </Button>
            </>
          )}
          {basket && (
            <>
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                onClick={() => {
                  removeItemsFromBasket(item.id);
                }}
              >
                Remove
              </Button>
                 
                 <div className={classes.buttons}>
                 <Button className={classes.btn} type="button" size="small"onClick={()=>updateCartItem(item.id,item.quantity - 1)}>-</Button>
                   <Typography variant="h4">&nbsp;{item.quantity}&nbsp;</Typography>
                 <Button className={classes.btn} type="button" size="small"onClick={()=>updateCartItem(item.id,item.quantity + 1)}>+</Button>
                 </div>
                </>
          )}

        </CardActions>
       
      </Card>
    );
  };
  
  export default CartItem;