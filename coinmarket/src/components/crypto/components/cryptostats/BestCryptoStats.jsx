import React from 'react'
import useCryptoStats from '../../hooks/useCryptoStats'
import CryptoAreaGraph from '../graphs/CryptoAreaGraph'

const BestCryptoStats = () => {
    let {stats,isLoading,isError}=useCryptoStats()

    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <h1>errorr..</h1>
    }

    // destructuring the BestCoins
    let {bestCoins=[]}=stats
    console.log("bestCoins",bestCoins)

  return (
    <div className='container my-2'>
       <div className="row">
          {
            bestCoins.map((coin)=><CryptoAreaGraph key={coin.uuid} coin={coin}/>)
          }
       </div>
    </div>
  )
}

export default BestCryptoStats
