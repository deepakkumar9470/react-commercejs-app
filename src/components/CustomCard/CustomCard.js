// import {
//     Card,
//     CardMedia,
//     CardContent,
//     CardActions,
//     Typography,
//     CardActionArea,
//     Button,
//   } from "@mui/material";
//   import { ShoppingCart } from "@mui/icons-material";
//   import "./style.css";
  
//   const CustomCard = ({basket,item,addProduct,removeItemsFromBasket}) => {
    
//     return (
//       <Card className="custom-card">
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             alt="Contemplative Reptile"
//             height="260"
//             className="card-image"
//             image= 'https://images.pexels.com/photos/7828323/pexels-photo-7828323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
//             title="Contemplative Reptile"
//           />
//           <CardContent className="content">
//             <Typography
//               className="title"
//               gutterBottom
//               variant="h5"
//               component="h2"
//             >
//               {item.name}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         {basket && (
//           <CardActions>
//             <Typography
//               className="basket-item-price"
//               gutterBottom
//               variant="h5"
//               component="h2"
//             >
//               {item.price.formatted_with_symbol}
//             </Typography>
//           </CardActions>
//         )}
//         <CardActions className="actions-content">
//           {!basket && (
//             <>
//               <Typography
//                 className="price"
//                 gutterBottom
//                 variant="h5"
//                 component="h2"
//               >
//                 {item.price.formatted_with_symbol}
//               </Typography>
//               <Button
//                 size="large"
//                 className="custom-button"
//                 onClick={() => {
//                   addProduct(item.id, 1);
//                 }}
//               >
//                 <ShoppingCart /> Add to basket
//               </Button>
//             </>
//           )}
//           {basket && (
//             <>
//               <Button
//                 size="small"
//                 color="secondary"
//                 variant="outlined"
//                 onClick={() => {
//                   removeItemsFromBasket(item.id);
//                 }}
//               >
//                 Remove
//               </Button>
             
                
//                 <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                
              
//             </>
//           )}
//         </CardActions>
//       </Card>
//     );
//   };
  
//   export default CustomCard;