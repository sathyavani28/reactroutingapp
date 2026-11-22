import React, { useState } from 'react'

export default function Demo1() 
{
     const [data,setData] = useState([])

    const url = "https://fakestoreapi.com/products"
    
    fetch(url)
             .then(resonse => resonse.json())  // converting response into json format
             .then(data => setData(data))     // setting the json data to data variable
             .catch(err => console.log(err))
              
  return (
    <div>
               <h3>API Demo 1</h3>

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
                ))
              }

                  </table>
             
    </div>
  )
}
