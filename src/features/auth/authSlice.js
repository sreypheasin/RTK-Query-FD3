import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // SIGNUP
    signUp: builder.mutation({
      query: (body) => ({
        url: `https://ishop-api.istad.co/api/v1/users/user-signup`,
        method: "POST",
        body
      })
    })
  })
});

export const { useSignUpMutation } = authApiSlice;
