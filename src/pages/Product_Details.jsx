import React from 'react'
import { useParams} from 'react-router-dom'
import { data } from '../utils/data'


export const Product_Details = (props) => {
  const params = useParams()

  const filtered_data = data.filter((pro)=> {
  
   return pro.id == params.id
  })

  console.log(filtered_data)

  const selectedId = filtered_data[0]

  
  return (
    <>

    <div className="container">
      <h1>Product Details</h1>
     

      <div className="card_details">
        
      <div className='details-img'>

      <img src={selectedId.image} alt={selectedId.title} />
    <div>Product_Details {params.id}</div>
      
      </div>
      <div className="details-des">

      <h2>{selectedId.category}</h2>
      <h3>{selectedId.title}</h3>
      
      <p>{selectedId.description}</p>
      
      <h4>Price: {selectedId.price}</h4>

      </div>

      
    </div>
    </div>
    </> 
  )
}