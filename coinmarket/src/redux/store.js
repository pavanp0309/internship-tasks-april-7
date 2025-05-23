import { configureStore } from '@reduxjs/toolkit'
import { cryptoMarketApi } from '../components/crypto/services/cryptoMarkets'


const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [cryptoMarketApi.reducerPath]: cryptoMarketApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoMarketApi.middleware),
})

export default store