import React from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import data from './data/data'

const properties = () => {
    return(
        <div className="container">
            <div className="row">
                {data.map((ele)=>(
                    <div key={ele.id} className='col-12 col-md-3 col-lg-3 mx-2' id='card'>
                        <img className="card-img-top" id="card-img" src={ele.img} alt="" />
                        <div className="card-body">
                        <h5 class="card-title title my-2 ">{ele.title}</h5>
                        <p class="card-text company"><b>company:</b>{ele.company}</p>
                        <p class="card-text location"><b>location</b>{ele.location}</p>
                        <p class="card-text price"><b>price</b>{ele.price}</p>
                        <p class="card-text area"><b>area</b>{ele.area}</p>
                        <p class="card-text verified"><b>verified by Govt:</b>{ele.verified? "Verified":"Not Verified"}</p>
                        <div className="basics">
                        <p class="card-text bedrooms"><b>bedroom</b>{ele.bedrooms}BHK flats</p>
                        <p class="card-text amenities"><b>amenities:</b>{ele.amenities?"yes":"no"}</p>
                        <p class="card-text available"><b>available:</b>{ele.available?"yes":"no"}</p>
                        </div>

                      <a herf="#" class="btn btn-primary">{ele.Contactnow?(
                        <span className="btn btn-">Contactnow</span>
                      ):<span className="btn-sucess">Contactnow</span>}</a>

                    </div>
                 </div>   

            </div>    
        ))}
    )
}
</div>
