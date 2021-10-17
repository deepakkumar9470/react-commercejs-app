import { Search } from '@mui/icons-material'
import {Grid,Paper,InputBase,IconButton,Container } from '@mui/material'
import React,{useState} from 'react'
import SelectCategory from './SelectCategory'
import Product from '../Product/Product'
import {commerce} from '../../lib/Commerce'

const defaultCategory = {id:  0 , name : "All"};

const FilterProduct = ({categories,searchResult,setSearchResult,addProduct}) => {
    const [selectedCategory,setSelectedCategory] = useState(defaultCategory)
    const [keyword,setKeyword] = useState("")
    const [resultMessage,setResultMessage] = useState("")
   
    const handleSelectChange = (e) =>{
        const {value} = e.target
        const category = categories.find((cat) => cat.id === value)
        setSelectedCategory(category)
     };

     
    const handleInputChange = (e) =>{
     if(!keyword || !e.target.value){
         setResultMessage("")
         setSearchResult([])
         setSelectedCategory(defaultCategory)
     };
       setKeyword(e.target.value)
    };

    const onSubmitForm = async (e) =>{
       e.preventDefault()
       if(!keyword){
           setResultMessage('You have to enter product name')
       }
       if(keyword){
           try {
               const categoryId = selectedCategory.id
               ? {category_id : selectedCategory.id} : 
                 {};

               const {data} = await commerce.products.list({
                   query : keyword,
                   ...categoryId
               });
               if(!data){
                setResultMessage("")
                setSearchResult([])
                return
               } 
           } catch (error) {
               setSearchResult([])
           }
       }
    }

    
    return (
        <div className="filter-bar">
            <Container>
              <Paper component="form" className="root" onSubmit={onSubmitForm}>
              <SelectCategory
                categories={[defaultCategory,...categories]}
                selectedCategory={selectedCategory}
                onChange={handleSelectChange}
              />  
               <InputBase
               className="input"
               onChange={handleInputChange}
               placeholder="Search for a product"
               inputProps={{"aria-label" : "Search for a product"}}
               />   

               <IconButton type="submit" aria-label="search">
                   <Search/>
               </IconButton>
             </Paper>

             {resultMessage && <p className="result-message">{resultMessage}</p>}
             
             {searchResult.length && (

                    <div>
                        <Grid container spacing={4}>
                            {
                                searchResult.map((product) => (
                                    <Grid key={product.id} item xs={12} sm={6} md={4}>
                                        <Product product={product} addProduct={addProduct}/>

                                    </Grid>
                                ))
                            }

                        </Grid>
                    </div>
                 )
             }
            </Container>
            
        </div>
    )
}

export default FilterProduct


