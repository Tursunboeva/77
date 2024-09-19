
const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({
        url: "/product/all"
      }),
    }),
    getProductById: build.query({
      query: (id) => ({
        url: `/product/single-product/${id}`,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
