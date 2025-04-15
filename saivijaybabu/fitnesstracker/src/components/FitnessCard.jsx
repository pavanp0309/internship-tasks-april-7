import React from 'react'

const FitnessCard = ({ data }) => {
    const { title, Goal, Achived, progress, wish ,color,icon,time,strokeDasharray } = data
    return (
        <>
       
        <div  className="col-sm-12 col-md-3 col-lg-3 col-12">
            
            <div className="card p-3" style={{background:`${color}`}}>
                <h5>{title}</h5>
                {/* fit-icons */}
                <div className='icons d-flex justify-content-between mb-2'>
                    <i className={`bi ${icon} text-white bg-success text-center rounded-3 shadow` } id='icon' style={{ width: "50px", height: "50px" }}></i>
                    <i className="bi bi-box-arrow-up-right" id='icon'></i>
                </div>
                <div className="fit-info">
                    <b>GOALS: <span className='text-goal'>{Goal}</span></b>
                    <b className='mx-2'>Achived: <span className='text-achived'>{Achived}</span></b>
                </div>

                <div className="prograss border border-white shadow d-flex align-items-center">
                    <svg width="200" height="200" viewBox="-25 -25 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <circle r="90" cx="100" cy="100" fill="transparent" stroke="#e0e0e0" strokeWidth="16px"></circle>
                        <circle r="90" cx="100" cy="100" stroke="#76e5b1" strokeWidth="16px" strokeLinecap="round" strokeDashoffset="118.692px" fill="transparent" strokeDasharray={strokeDasharray}></circle>
                        <text x="45px" y="120px" fill="#6bdba7"  fontSize="52px" strokeWidth="bold" >{time}</text>
                    </svg>
                    <div className='greetings'>
                         <span>{wish?"Congrates 💐":"Please Go On"}</span>
                         <span>{progress?"You Crushed It" : "Keep Going"}</span>
                    </div>

                </div>



            </div>
        </div>
        </>
    )
}

export default FitnessCard
