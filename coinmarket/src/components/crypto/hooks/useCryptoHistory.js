
import { useGetCryptoCoinHistoryQuery } from '../services/cryptoMarkets'

const useCryptoHistory = (coinId,timePeriod="3h") => {
       console.log(timePeriod)
    let {data,isLoading,isError}=useGetCryptoCoinHistoryQuery({coinId,timePeriod})
    let history=data?.data?.history || []
  return {history,isLoading,isError}
}

export default useCryptoHistory
