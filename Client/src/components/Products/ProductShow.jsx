import React from 'react'
import {Box} from "@chakra-ui/react"
import Cards from './Cards'
import {useEffect} from 'react'
import { getProductsData } from '../../redux/AppReducer/action'
import {useDispatch, useSelector} from 'react-redux'
import {Grid,GridItem} from "@chakra-ui/react"
import AllProduct from './AllProduct'
 

const ProductShow = () => {
const dispatch = useDispatch()
 const products = useSelector((state)=>state.AppReducer.products)
 useEffect(() => {
   dispatch(getProductsData())
 }, [])


 
  return (
   <Grid templateColumns='repeat(4, 1fr)'  gap={"20px"} justifyContent="flex-end">
     {products?.map((el,i)=>(
 <GridItem key={i}>
 

     <AllProduct key={i} {...el}/>
 
 </GridItem>
     ))}
    </Grid>
  )
}

export default ProductShow