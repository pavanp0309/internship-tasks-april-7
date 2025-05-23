import React from 'react'
import { Card,Statistic } from "antd";
import useCryptomarkets from '../../hooks/useCryptomarkets';
import millify from 'millify';

const CryptoStatsCard = () => {
  const {GlobalStats,isLoading,isError}=useCryptomarkets()
  console.log("gStats",GlobalStats)
  const { total,totalMarketCap,totalMarkets,total24hVolume,totalCoins,totalExchanges,}=GlobalStats
 
  return (
    <div className="container-fluid p-3">
      <div className="row">
        <div className="col-sm-4 col-md-2 col-lg-2">
             <Card  variant="outlined" hoverable  loading={isLoading} >
              <Statistic title="Total" value={millify(total)} valueStyle={{ color: '#3f8600' }}/>
             </Card>
        </div>
        <div className="col-sm-4 col-md-2 col-lg-2">
            <Card  variant="outlined" hoverable loading={isLoading} >
              <Statistic title="totalMarketCap" value={millify(totalMarketCap)} valueStyle={{ color: '#3f8600' }}/>
            </Card>
        </div>
        <div className="col-sm-4 col-md-2 col-lg-2">
             <Card  variant="outlined" hoverable loading={isLoading} >
                  <Statistic title="totalMarkets" value={millify(totalMarkets)} valueStyle={{ color: '#3f8600' }}/>
             </Card>
        </div>
        <div className="col-sm-4 col-md-2 col-lg-2">
             <Card  variant="outlined" hoverable loading={isLoading} >
                 <Statistic title="total24hVolume" value={millify(total24hVolume)} valueStyle={{ color: '#3f8600' }}/>

             </Card>
        </div>
        <div className="col-sm-4 col-md-2 col-lg-2">
              <Card  variant="outlined" hoverable loading={isLoading} >
                <Statistic title="totalCoins" value={millify(totalCoins)} valueStyle={{ color: '#3f8600' }}/>
              </Card>
        </div>
        <div className="col-sm-4 col-md-2 col-lg-2">
             <Card  variant="outlined" hoverable loading={isLoading} >
                <Statistic title="totalExchanges" value={millify(totalExchanges)} valueStyle={{ color: '#3f8600' }}/>
             </Card>

        </div>
      </div>
    </div>
   
  )
}

export default CryptoStatsCard
