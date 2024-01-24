import React from 'react'
import { useNavigate } from 'react-router-dom'
import { data } from '../utils/data'


export const Products = () => {
  const navigate = useNavigate()

  const navigate_handle = (id) =>{
    console.log('clicked')

      navigate(`/products/${id}`)

  }
  return (
    <>
    {
      data.map((pro, index)=>{
        const {id, image, title, price,} = pro
       return <div className='card'>
           <img src={image} alt="" width={'300px'} />
          <h4>
            {title}
          </h4>
          <h3>
            Price: {price}
          </h3>
          <h5>
            Id: {id}
          </h5>

          <button onClick={()=>navigate_handle(id)}>
            View Details
          </button>
        </div>
      })
    }
    </>
  );
};
  
