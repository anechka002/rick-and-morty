import type { BaseQueryApi, FetchBaseQueryError, FetchBaseQueryMeta, QueryReturnValue } from "@reduxjs/toolkit/query/react"
import { isErrorWithMessage } from "./isErrorWithMessage"
import { setAppError } from "../../app/app-slice"


export const handleError = (
  api: BaseQueryApi,
  result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>
) => {

  let error = 'Some error occurred'

  // debugger

  // 1. Global query errors
  if (result.error) {
    switch (result.error.status) {
      case 'FETCH_ERROR':
      case 'PARSING_ERROR':
      case 'CUSTOM_ERROR':
        error = result.error.error
        break
      case 404:
        if (isErrorWithMessage(result.error.data)) {
          error = result.error.data.error
        }
        break
      case 400:
      case 500:
        if (isErrorWithMessage(result.error.data)) {
          error = result.error.data.error
        } else {
          error = JSON.stringify(result.error.data)
        }
        break
      default:
        error = "An error has occurred."  //JSON.stringify(result.error)
        break
    }
    api.dispatch(setAppError({ error }))
  }
}