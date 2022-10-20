import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const ProductContxt = createContext()
export const Product = () => useContext(ProductContxt)

export const ContextWrapper = ({ children }) => {

   const [data, setData] = useState([])
   const [isLoading, setIsLoading] = useState(false)

   useEffect(() => {
      (async () => {
         setIsLoading(true)
         const response = await axios.get('https://fakestoreapi.com/products')
         setData(response.data)
         setIsLoading(false)
      })();
   }, [setData])

   return (
      <>
         {isLoading ?
            <div>
               <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open={true}
               >
                  <CircularProgress color="inherit" />
               </Backdrop>
               <Box sx={{ width: '100%' }}>
                  <LinearProgress />
               </Box>
            </div>
            :
            <ProductContxt.Provider value={{ data }}>
               {children}
            </ProductContxt.Provider>
         }

      </>
   )
}