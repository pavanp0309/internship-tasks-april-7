import React from 'react'
import useCryptomarkets from '../../hooks/useCryptomarkets';
import useCryptoHistory from '../../hooks/useCryptoHistory';
import { Table } from "antd";
import millify from 'millify';
import LineChart from '../graphs/LineChart';

const CryptoTable = () => {
    let {coins,isLoading,isError}=useCryptomarkets()
    console.log("tablecoins",coins)
const columns = [
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
    response:["xs","sm","md","lg","xl","xxl"],
    align:"center"
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    response:["xs","sm","md","lg","xl","xxl"],
    align:"center",
    render:(text,record)=>(
        <div className='d-flex justify-content-evenly align-items-center'>
           <img src={record.iconUrl} alt="" width={"30px"} height={"30px"} />
           < div className='mx-2 '>{record.name}</div>
            <div className='fw-bold'>{record.symbol}</div> 
        </div>
    )
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    response:["xs","sm","md","lg","xl","xxl"],
    align:"center",
     render:(text,record)=>(millify(text))
  },
  {
    title: 'total24h',
    dataIndex: '24hVolume',
    key: '24hVolume',
    response:["xs","sm","md","lg","xl","xxl"],
    align:"center",
    render:(text,record)=>(millify(text))
  },
  {
    title: 'MarketCap',
    dataIndex: 'marketCap',
    key: 'marketCap',
    response:["xs","sm","md","lg","xl","xxl"],
    align:"center",
    render:(text,record)=>(millify(text))
  },
  {
    title: 'Graph',
    dataIndex: 'graph',
    key: 'graph',
    response:["xs","sm","md","lg","xl","xxl"],
    align:"center",
    render:(text,record)=>(<Historicaldata coinId={record.uuid}/>)
  },
];

// function for getting each coin history to display the Graph
function Historicaldata({coinId}){
    console.log("coinid for history",coinId)
    const {history,isLoading,isError}=useCryptoHistory(coinId)
    console.log("history:",history)

    if(isLoading){
        return <span>Loading...</span>
    }
     if(isError){
        return <span>error</span>
     }

     return <LineChart  data={history}/>


}

  return (
    <div className='container-fluid p-3'>
      <Table dataSource={coins} key={coins.uuid} columns={columns} bordered />;
    </div>
  )
}

export default CryptoTable
