import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import data from './data/data'

const Properties = () => {
  return (
    <div className='container '>
        <h1 className='title-1'>Ghar Dheko</h1>
        <div className="row">
        {data.map((ele)=>(
            <div key={ele.id} className='col-12 col-md-3 col-lg-3 mx-2 ' id='card'>
                <img className=' card-img-top' id='card-img' src={ele.img} alt="" />
                <div className='card-body'>
                    <h5 class="card-title title my-2 "> {ele.title}</h5>
                    <p class="card-text company"><b>comapany:</b>{ele.company}</p>
                    <p class="card-text location"><b>location:</b>{ele.location}</p>
                    <p class="card-text price"><b>price:</b>{ele.price}</p>
                    <p class="card-text area"><b>area:</b>{ele.area}</p>
                    <p class="card-text verified"><b>Verified by Govt:</b> {ele.verified? "Verified":"Not Verified"}</p>
                    <div className='basics'>
                    <p class="card-text bedrooms"><b></b>{ele.bedrooms}BHK flats</p>
                    {/* <p class="card-text bathrooms"><b>bathrooms</b>{ele.bathrooms}</p> */}
                    <p class="card-text amenities"><b>amenities:</b>{ele.amenities?"yes":"no"}</p>
                    <p class="card-text available ">{ele.available?( <span className=' avai'>✅Available</span>):(<span className=' non-avai'>❌Not Available</span>)}</p>
                </div>
                    
                    <a href="#" class="btn   ">{ ele.available?(
                        <span className=' btn btn-primary '>Contactnow</span>
                    ):(<span className='btn btn-danger'>Contactnow</span>)}</a>
               
            </div>
                
                
                        
    </div>
        ))}
        </div>
    </div>
    
   

    
  )
}

export default Properties
