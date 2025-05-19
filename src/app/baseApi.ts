import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { handleError } from "../common/utils/handleError"

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["Character", "Location"],
  baseQuery: async (args, api, extraOptions) => {
    // await new Promise(resolve => setTimeout(resolve, 3000))

    const result = await fetchBaseQuery({
      baseUrl: import.meta.env.VITE_BASE_URL,
    })(args, api, extraOptions)

    handleError(api, result)
    
    return result
  },
  endpoints: () => ({}),
  //keepUnusedDataFor: 5 // Время хранения данных в кэше по умолчанию 60 секунд,

  //refetchOnFocus: true, // для автоматического повторного запроса за данными, когда окно приложения или вкладка браузера возвращаются в фокус.

  refetchOnReconnect: true, // для автоматического повторного запроса за данными, когда приложение или браузер восстанавливает соединение с интернетом после его потери.

})