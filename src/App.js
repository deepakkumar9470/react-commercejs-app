import './App.css';
import React,{useState,useEffect} from 'react'
import {commerce} from './lib/Commerce'
import Products from './components/Products'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import ProductView from './components/ProductView/ProductView';


function App() {
  const[products, setProducts] = useState([])
  const[basketData, setBasketData] = useState({})
  const[categories,setCategories] = useState([])

   const fetchProducts = async () =>{
       try {
           const res = await commerce.products.list()
           setProducts(res.data)

       } catch (error) {
         console.log(error)
       } 
   }


   const fetchCategory = async () =>{
    try {
        const res = await commerce.categories.retrieve()
        setCategories(res)

    } catch (error) {
      console.log(error)
    } 
}

   const fetchCartItems = async () =>{
    try {
        const res = await commerce.cart.retrieve()
        setBasketData(res)

    } catch (error) {
      console.log(error)
    } 
   }
   const handleAddToCart = async (productId, quantity) =>{
    try {
     const res = await commerce.cart.add(productId, quantity)
     setBasketData(res.cart)
    } catch (error) {
     console.log(error)
    }
  }; 

        const updateCartItem = async (productId,quantity) =>{
        try {
          const res = await commerce.cart.update(productId,{quantity})
          setBasketData(res.cart)
        } catch (error) {
          console.log(error)
        }
      }; 
        const removeCartItem = async (productId) =>{
        try {
          const res = await commerce.cart.remove(productId)
          setBasketData(res.cart)
        } catch (error) {
          console.log(error)
        }
      }; 

      const emptyCart = async () =>{
        try {
          const res = await commerce.cart.empty()
          setBasketData(res.cart)
        } catch (error) {
          console.log(error)
        }
      }; 


   useEffect(() => {
     fetchProducts()
     fetchCartItems()
     fetchCategory()
   }, [])

   console.log({products})
   console.log(categories)
  

  return (
    <Router>
     <div>
       <NavBar 
         basketItems={basketData.total_items}
         totalCost = {
           (basketData.subtotal && basketData.subtotal.formatted_with_symbol || "00.00")
         }/>
      
      <Switch>
             <Route exact path="/">
                 <Products 
                   products={products} 
                   addProduct={handleAddToCart}
                   categories = {categories}
                  /> 
              </Route>

              <Route exact path="/cart">
                 <Cart 
                    addProduct={handleAddToCart}
                    basketData={basketData}
                    handleEmptyBasket={emptyCart}
                    removeItemsFromBasket={removeCartItem}
                    updateCartItem={updateCartItem}
                  /> 
              </Route>

                <Route exact path="/product-view/:id">
                  <ProductView addProduct={handleAddToCart}/>
                 </Route>
       </Switch>
       <Footer/>
     </div>
    </Router>
    
  );
}

export default App;
