
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter, ResponsiveContainer,} from 'recharts';


const LineBarChart = ({data}) => {
  console.log(data)

  // generating the coin History for the Graph 
  let coinHistory=data?.map((ele)=>(
    {
      date:new Date(ele.timestamp*1000).toLocaleTimeString(),
      price:parseFloat(ele?.price)
    }
  )).slice(0,30) || []

  console.log(coinHistory)

  return (<div style={{width:"100%",height:"400px"}}>
     <ResponsiveContainer >
        <ComposedChart
          width={500}
          height={400}
          data={coinHistory}
          margin={{
            top: 20,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        >
          {/* <CartesianGrid stroke="#f5f5f5" /> */}
          {/* <XAxis dataKey="price" scale="band" /> */}
          {/* <YAxis /> */}
          <Tooltip />
          {/* <Legend /> */}
          {/* <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" /> */}
          <Bar dataKey="price" barSize={40} fill="#413ea0" />
          <Line type="monotone" dataKey="price" stroke="#ff7300" />
          <Scatter dataKey="price" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
  </div>
  )
}

export default LineBarChart
