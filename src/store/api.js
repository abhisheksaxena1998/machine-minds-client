import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'https://machine-minds-backend.onrender.com/',
        baseUrl: 'http://localhost:8000/',
    }),
    endpoints: (builder) => ({
        submitData: builder.mutation({
            query: (payload) => {
                const bodyFormData = new FormData()
                bodyFormData.append('search', payload.search)
                bodyFormData.append('image', payload.file)
                return {
                    url: 'product_category_api/',
                    method: 'POST',
                    prepareHeaders: (headers) => {
                        headers.set("Content-Type", "multipart/form-data");
                        return headers;
                    },
                    body: bodyFormData,
                }
            }
        }),
    }),
})

export const { useSubmitDataMutation } = apiSlice