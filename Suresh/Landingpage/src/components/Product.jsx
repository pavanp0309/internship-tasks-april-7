import React from 'react'
import Data from '../data/Data'




  return (
    <div className='container '>
        {/* Header start */}
        <h1 className='text-bold text-success text-center'>Top Discount Sale </h1>
        {/* Header end */}
        {/* filter-section start */}
        <section className='filter-section  d-flex justify-content-between'>
        <div className='filters'>
        <button className='btn btn-outline-light text-danger' onClick={()=>HandleFilter("category","men's clothing")}>men's clothing</button>
        <button className='btn btn-outline-light text-danger'  onClick={()=>HandleFilter("category","women's clothing")}>women's clothing</button>
        <button className='btn btn-outline-light text-danger'  onClick={()=>HandleFilter("category","electronics")}>electronics</button>
        <button className='btn btn-outline-light text-danger'  onClick={()=>HandleFilter("category","jewelery")}>jewelery</button>
        </div>
        <div className='sorting'>
        <button className='btn btn-outline-light text-warning' onClick={()=>HandleFilter("sort","des")}>Hightolow</button>
        <button className='btn btn-outline-light text-warning' onClick={()=>HandleFilter("sort","asc")}>LowtoHigh</button>
        </div>
        </section>

        {/* filter-section end */}
        {/* Products sttart */}

        <section className='row'>
            {
            fiterProducts.map((prod)=>(
                <div className='col-12 col-sm-12 col-md-3 col-lg-3'>
                    <div class="card" >
                    <img src={prod.image} class="card-img-top" alt="..." width={"100%"} height={"200px"}/>
                    <div class="card-body">
                        <h5 class="card-title">{prod.title.slice(0,15)}</h5>
                        <p class="card-text">{prod.price}</p>
                        <a href="#" class="btn btn-primary">Addtocart</a>
                    </div>
                </div>
                </div>
            ))
            }

        </section>
        {/* Products end */}
     
    </div>
  )


export default Product
