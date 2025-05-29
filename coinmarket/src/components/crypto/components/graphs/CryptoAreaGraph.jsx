import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useCryptoHistory from '../../hooks/useCryptoHistory';
import { curveCardinal } from 'd3-shape';

const CryptoAreaGraph = ({coin}) => {
    let {uuid,iconUrl,name,symbol}=coin

    // getting the History of the Top coins by populating the ids
    const {history,isLoading,isError}=useCryptoHistory(uuid,"24h")

    
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <h1>errorr..</h1>
    }


     // generating the coin History for the Graph 
  let coinHistory=history?.map((ele)=>(
    {
      date:new Date(ele.timestamp*1000).toLocaleDateString(),
      price:parseFloat(ele?.price)
    }
  ))

  console.log(coinHistory)

//   generating the colors based price varaition
let firstprice=coinHistory[0]?.price
let lastprice=coinHistory[coinHistory.length-1]?.price
let fillcolor=firstprice>=lastprice?"green":"red"
let strokecolor=firstprice>=lastprice?"orange":"blue"

const cardinal = curveCardinal.tension(0.2);

    
  return (
    <div className='col-sm-12 col-md-4 col-lg-4'>
       <div className="card border border-success shadow p-1">
        <div className='card-header d-flex '>
         <img src={iconUrl} alt={symbol} width={"30px"} height={"30px"} />  
         <h5 className='card-title mx-3'>{name}</h5>
         <p>{symbol}</p>
        </div>
        <div className="card-body" style={{width:"100%",height:"300px"}}>
             <ResponsiveContainer >
        <AreaChart
          width={500}
          height={400}
          data={coinHistory}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          <Tooltip />
          <Area type="monotone" dataKey="price" stroke={strokecolor} fill={fillcolor}  fillOpacity={0.3} />
            <Area type={cardinal} dataKey="price" stroke={strokecolor} fill={fillcolor}  fillOpacity={0.3} />
        </AreaChart>
       </ResponsiveContainer>
        </div>
       </div>
    </div>
  )
}

export default CryptoAreaGraph
