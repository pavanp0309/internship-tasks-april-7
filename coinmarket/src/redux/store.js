import { configureStore } from '@reduxjs/toolkit'
import { cryptoMarketApi } from '../components/crypto/services/cryptoMarkets'
import { authApi } from '../components/auth/services/authApi'
import authReducer from "../components/auth/services/authSlice"

const store = configureStore({
  reducer: {
    auth:authReducer,
    // Add the generated reducer as a specific top-level slice
    [authApi.reducerPath]: authApi.reducer,
    [cryptoMarketApi.reducerPath]: cryptoMarketApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoMarketApi.middleware,authApi.middleware),
})

export default store