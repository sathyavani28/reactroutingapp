import React, { useEffect, useState } from 'react'

export default function Demo2() 
{
    const [data,setData] = useState([])
    const [error,setError] = useState("")

    const url = "https://fakestoreapi.com/products"
    
    const fetchData = async () => {
        try 
         {
           const response = await fetch(url)
           const data = await response.json()
           setData(data)
         } 
         catch(error) 
        {
           setError(error.message)
        }
    }

   useEffect(() => {
         fetchData()
   }, [])   // empty dependency 
   

      
    

  return (
    <div>
               <h3>API Demo 2</h3>

          {  data.length>0 ?  (
                <table align='center' border={1}>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                  </tr>

              {
                data.map( (product,index)   => (
                     <tr key={index}>
                      <td>{product.id}</td>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>{product.category}</td>
                     </tr>
                ))}
                         </table>      
           ) :
               
               error ? <p>{error}</p>  :

               <p>Loading Data .................</p>
        }
   </div>
  )              
}
