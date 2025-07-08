
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// paste code from RapidAPI
// const options = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-key': '26143393aemshdf397b62645c3acp1ce170jsn4ea344599502',
//     'x-rapidapi-host': 'shazam-core.p.rapidapi.com'
//   }
// };

// fetch('https://shazam-core.p.rapidapi.com/v1/charts/world?country_code=IN', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));



export const shazamCoreApi = createApi({
    // an api must have a reducerPath - simply the name of our API
    reducerPath: 'shazamCoreApi',
    // now we can call in inside our store.js

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',

        // prepare headers before each API call
        // so we won't have to provide "options" everytime
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', '26143393aemshdf397b62645c3acp1ce170jsn4ea344599502')  // now we no longer need "options" & "fetch function" (which we've commented above)
            // headers.set('x-rapidapi-key', 'f8ec8c31c7msh795d3cfa1e61a8bp1ab889jsn2b704c1a14d6')  // now we no longer need "options" & "fetch function" (which we've commented above)
            return headers;

        },
    }),

    endpoints: (builder) => ({
        // building all of the endpoints of the API we are gonna call

        getTopCharts: builder.query({ query: () => '/charts/world?country_code=IN' }),
    })
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;

// now use useGetTopChartsQuery in Discover.jsx