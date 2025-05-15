import { baseApi } from '../../../app/baseApi';
import type { ServerResponse } from './characterApi.type';

export const characterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCharacter: builder.query<ServerResponse, { page: number }>({
      query: (params) => ({
        url: '/character',
        params: { ...params },
      }),
      providesTags: ['Character'],
    }),
  }),
});

export const { useGetCharacterQuery } = characterApi;
