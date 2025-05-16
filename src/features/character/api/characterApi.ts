import { baseApi } from '../../../app/baseApi';
import type { ServerResponse } from './characterApi.type';

export const characterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCharacter: builder.query<ServerResponse, { page: number, name: string }>({
      query: (params) => ({
        url: '/character',
        params: { ...params },
      }),
      providesTags: ['Character'],
    }),
    // searchCharacter: builder.query<ServerResponse, string>({
    //   query: (search: string) => ({
    //     url: '/character',
    //     params: { 
    //       q: search,
    //     },
    //   }),
    //   providesTags: ['Character'],
    // }),
  }),
});

export const { useGetCharacterQuery } = characterApi;
