// import React from 'react'
import RateReviewIcon from '@mui/icons-material/RateReview';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AdjustIcon from '@mui/icons-material/Adjust';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import React, { useEffect, useState } from "react";

const Section = () => {

  const[products,setProducts]=useState([])
  
    useEffect(()=>{
      fetch("http://localhost:5050/products")
      .then(res=>res.json())
      .then(info=>
       setProducts(info)
        )
   },[])

  return (
<>


<section className='boxs'>


{products && products.map((product)=>(


<div className='dataBox'>
          <div>
          <div className='iconBox'><RateReviewIcon className='icon'/></div>
            <br />
            <br />
          <h2>{product.name}</h2>
          <br />
          <p>{product.Title}</p>
          <br />
          <br />
          <button className='dataBtn'>More Details</button>
        </div>
          </div>



))}


</section>









</>
  )
}

export default Section