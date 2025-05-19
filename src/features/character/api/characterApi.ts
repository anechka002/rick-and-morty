import { baseApi } from '../../../app/baseApi';
import type { CharacterType, EpisodeType, LocationType, ServerResponse } from './characterApi.type';

export const characterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCharacters: builder.query<ServerResponse<CharacterType>, { page: number, name: string }>({
      query: (params) => ({
        url: '/character',
        params: { ...params },
      }),
      providesTags: ['Character'],
    }),
    getCharacterDetailsById: builder.query<CharacterType, number>({
      query: (id: number) => ({
        url: `/character/${id}`,
      }),
      providesTags: (_result, _error, id) => [{ type: 'Character', id }],
    }),
    getAllLocations: builder.query<ServerResponse<LocationType>, void>({
      query: () => ({
        url: `/location`,
      }),
      providesTags: ['Location'],
    }),
    getAllEpisodes: builder.query<ServerResponse<EpisodeType>, void>({
      query: () => ({
        url: `/episode`,
      }),
      providesTags: ['Episode'],
    }),
    
  }),
});

export const { useGetAllCharactersQuery, useGetCharacterDetailsByIdQuery, useGetAllLocationsQuery, useGetAllEpisodesQuery } = characterApi; 
