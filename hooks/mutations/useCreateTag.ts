import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { ITag } from '../../models/tag';

export interface INewTag {
  name: string;
  color: string;
}

async function createTag(newTag: INewTag) {
  const { origin } = window.location;
  const response = await axios.put<ITag>(`${origin}/api/tags`, newTag);

  const tag = response.data;
  return tag;
}

function updateQueryCache(queryClient: QueryClient, createdTag: ITag) {
  const previousTags = queryClient.getQueryData<ITag[]>('tags');

  if (!previousTags) return;

  queryClient.setQueryData('tags', [...previousTags, createdTag]);
}

function useCreateTag() {
  const queryClient = useQueryClient();

  return useMutation((newTag: INewTag) => createTag(newTag), {
    onSuccess: (createdTag) => updateQueryCache(queryClient, createdTag),
  });
}

export default useCreateTag;
