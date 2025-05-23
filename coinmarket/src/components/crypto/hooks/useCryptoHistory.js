
import { useGetCryptoCoinHistoryQuery } from '../services/cryptoMarkets'

const useCryptoHistory = (coinId="Qwsogvtv82FCd") => {
    let {data,isLoading,isError}=useGetCryptoCoinHistoryQuery(coinId)
    let history=data?.data?.history || []
  return {history,isLoading,isError}
}

export default useCryptoHistory
