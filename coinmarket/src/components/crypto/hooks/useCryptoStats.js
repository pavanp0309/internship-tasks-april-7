import { useGetCryptoStatsQuery } from "../services/cryptoMarkets"

const useCryptoStats = () => {
    let {data,isLoading,isError}=useGetCryptoStatsQuery()
    let stats=data?.data || {}

  return  {stats,isLoading,isError}

}

export default useCryptoStats
