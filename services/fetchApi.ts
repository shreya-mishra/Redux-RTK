// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';

// const NGROK_URL =
//   'https://4138-2406-7400-56-77f9-db27-d2c5-34de-7270.ngrok-free.app';
// export const fetchDataApi = createApi({
//   reducerPath: 'fetchDataApi',
//   baseQuery: fetchBaseQuery({baseUrl: NGROK_URL}),
//   endpoints: builder => ({
//     getData: builder.query({
//       query: () => '/',
//     }),
//   }),
// });

// export const {useGetDataQuery} = fetchDataApi;
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const fetchDataApi = createApi({
  reducerPath: 'fetchDataApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://6563-2406-7400-56-77f9-db27-d2c5-34de-7270.ngrok-free.app',
  }),
  endpoints: builder => ({
    getData: builder.query<any, any>({
      query: () => '/',
    }),
    getAuthData: builder.query<any, any>({
      query: (accessToken: string) => {
        return {
          url: '/authorised',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetDataQuery, useGetAuthDataQuery} = fetchDataApi;
