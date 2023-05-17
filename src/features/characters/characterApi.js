import { apiSlice } from '../api/apiSlice'

export const characterApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: () => ({
        url: '/characters',
        method: 'GET',
      }),
      keepUnusedDataFor: 60,
      providesTags: ['Characters'],
    })
  
  }),
})

export const {
  useGetCharactersQuery,
} = characterApi
