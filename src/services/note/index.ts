import { useEffect, useState } from "react";
import { MutateOptions, useMutation, useQuery, useQueryClient } from "react-query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { fetchToServiceResponse } from "@utils/service";
import {
  FetchGetApiNotesRequestBody,
  FetchGetApiNotesResponseBody,
  DefaultGetApiNotesQueryKey,
  fetchGetApiNotes,
  FetchGetApiNotesIdRequestBody,
  FetchGetApiNotesIdResponseBody,
  DefaultGetApiNotesIdQueryKey,
  fetchGetApiNotesId,
  MutatePostApiNotesRequestBody,
  MutatePostApiNotesResponseBody,
  mutatePostApiNotes,
  MutatePutApiNotesIdRequestBody,
  MutatePutApiNotesIdResponseBody,
  mutatePutApiNotesId,
  MutateDeleteApiNotesIdRequestBody,
  MutateDeleteApiNotesIdResponseBody,
  mutateDeleteApiNotesId,
} from "./requests";

export const useNoteService = () => {
  const queryClient = useQueryClient();

  const mutationPostApiNotes = useMutation(mutatePostApiNotes);

  const mutationPutApiNotesId = useMutation(mutatePutApiNotesId);

  const mutationDeleteApiNotesId = useMutation(mutateDeleteApiNotesId);

  const useGetApiNotes = () => {
    const [query, setQuery] = useState<{ params?: Partial<FetchGetApiNotesRequestBody> }>();
    const queryResult = useQuery([...DefaultGetApiNotesQueryKey, query?.params], fetchGetApiNotes, {
      ...DEFAULT_QUERY_OPTIONS,
      enabled: query !== undefined,
    });
    return {
      query: (params: Partial<FetchGetApiNotesRequestBody> = {}) => {
        setQuery({ params });
      },
      useQuery: (params: Partial<FetchGetApiNotesRequestBody> = {}) => {
        useEffect(() => {
          setQuery({ params });
        }, []);
        return queryResult;
      },
      fetch: (
        params: Partial<FetchGetApiNotesRequestBody> = {}
      ): Promise<FetchGetApiNotesResponseBody> => {
        setQuery({ params });
        return fetchToServiceResponse(queryClient, [...DefaultGetApiNotesQueryKey, params]);
      },
    };
  };

  const useGetApiNotesId = () => {
    const [query, setQuery] = useState<{ params?: Partial<FetchGetApiNotesIdRequestBody> }>();
    const queryResult = useQuery(
      [...DefaultGetApiNotesIdQueryKey, query?.params],
      fetchGetApiNotesId,
      {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: query !== undefined,
      }
    );
    return {
      query: (params: Partial<FetchGetApiNotesIdRequestBody> = {}) => {
        setQuery({ params });
      },
      useQuery: (params: Partial<FetchGetApiNotesIdRequestBody> = {}) => {
        useEffect(() => {
          setQuery({ params });
        }, []);
        return queryResult;
      },
      fetch: (
        params: Partial<FetchGetApiNotesIdRequestBody> = {}
      ): Promise<FetchGetApiNotesIdResponseBody> => {
        setQuery({ params });
        return fetchToServiceResponse(queryClient, [...DefaultGetApiNotesIdQueryKey, params]);
      },
    };
  };

  const postApiNotes = {
    fetch: (
      body?: MutatePostApiNotesRequestBody,
      options: MutateOptions<
        MutatePostApiNotesResponseBody,
        unknown,
        MutatePostApiNotesRequestBody,
        unknown
      > = {}
    ) => {
      if (!body) {
        throw new Error("MISSING_BODY");
      }
      return mutationPostApiNotes.mutateAsync(body, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Note");
        },
      });
    },
  };

  const putApiNotesId = {
    fetch: (
      body?: MutatePutApiNotesIdRequestBody,
      options: MutateOptions<
        MutatePutApiNotesIdResponseBody,
        unknown,
        MutatePutApiNotesIdRequestBody,
        unknown
      > = {}
    ) => {
      if (!body) {
        throw new Error("MISSING_BODY");
      }
      return mutationPutApiNotesId.mutateAsync(body, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Note");
        },
      });
    },
  };

  const deleteApiNotesId = {
    fetch: (
      body?: MutateDeleteApiNotesIdRequestBody,
      options: MutateOptions<
        MutateDeleteApiNotesIdResponseBody,
        unknown,
        MutateDeleteApiNotesIdRequestBody,
        unknown
      > = {}
    ) => {
      if (!body) {
        throw new Error("MISSING_BODY");
      }
      return mutationDeleteApiNotesId.mutateAsync(body, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Note");
        },
      });
    },
  };

  return {
    useGetApiNotes,

    useGetApiNotesId,

    postApiNotes,
    mutationPostApiNotes,

    putApiNotesId,
    mutationPutApiNotesId,

    deleteApiNotesId,
    mutationDeleteApiNotesId,
  };
};
