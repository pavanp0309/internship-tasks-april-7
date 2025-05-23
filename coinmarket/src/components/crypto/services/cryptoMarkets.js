import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// cryptoHeaders
let cryptoHeaders = {
  "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
  "x-rapidapi-host": import.meta.env.VITE_RAPID_API_HOST,
};

const baseUrl = `https://coinranking1.p.rapidapi.com`;

// creating the request to the Server by combining the baseurl and header
let createRequest = (url) => ({ url, headers: cryptoHeaders });
// https://coinranking1.p.rapidapi.com/endpoint-(coins/stats/coindetails)

// Define a service using a base URL and expected endpoints
export const cryptoMarketApi = createApi({
  reducerPath: "cryptoMarketApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoMarkets: builder.query({
      query: () => createRequest("/coins"), // gets all coins from the crypto coins api
    }),
    getCryptoStats: builder.query({
      query: () => createRequest("/stats"), // gets all coins stats from the crypto coins api
    }),
    getCryptoCoinDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`), // gets single coin details from the crypto coins api
    }),
    getCryptoCoinHistory: builder.query({
      query: (coinId, timePeriod="3h") =>
        createRequest(`/coin/${coinId}/history?&timePeriod=${timePeriod}`), // gets  price history of coin
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
   useGetCryptoMarketsQuery,
  useGetCryptoStatsQuery,
  useGetCryptoCoinDetailsQuery,
  useGetCryptoCoinHistoryQuery } = cryptoMarketApi;
