import { apiSlice } from '../api/apiSlice'

export const stripeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStripes: builder.query({
      query: () => ({
        url: '/stripes',
        method: 'GET',
      }),
      keepUnusedDataFor: 60,
      providesTags: ['Stripes'],
    }),
    getStripe: builder.query({
      query: (id) => ({
        url: `/stripes/${id}`,
        method: 'GET',
      }),
    }),
    addStripe: builder.mutation({
      query: (data) => ({
        url: '/stripes',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Stripes'],
    }),
    updateStripe: builder.mutation({
      query: ({ id, data }) => ({
        url: `/stripes/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Stripes'],
    }),
    deleteStripe: builder.mutation({
      query: (id) => ({
        url: `/stripes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Stripes'],
    }),
  }),
})

export const {
  useGetStripesQuery,
  useGetStripeQuery,
  useAddStripeMutation,
  useUpdateStripeMutation,
  useDeleteStripeMutation,
} = stripeApi
