
import { useGetCryptoCoinHistoryQuery } from '../services/cryptoMarkets'

const useCryptoHistory = (coinId,timeperiod="3h") => {
    let {data,isLoading,isError}=useGetCryptoCoinHistoryQuery(coinId,timeperiod)
    let history=data?.data?.history || []
  return {history,isLoading,isError}
}

export default useCryptoHistory
