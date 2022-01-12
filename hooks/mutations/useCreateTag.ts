import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { Tag } from '../../models/tag';

interface NewTag {
  name: string;
  color: string;
}

async function createTag(newTag: NewTag) {
  const { origin } = window.location;
  const response = await axios.put<Tag>(`${origin}/api/tags`, newTag);

  const tag = response.data;
  return tag;
}

function updateQueryCache(queryClient: QueryClient, createdTag: Tag) {
  const previousTags = queryClient.getQueryData<Tag[]>('tags');

  if (!previousTags) return;

  queryClient.setQueryData('tags', [...previousTags, createdTag]);
}

function useCreateTag() {
  const queryClient = useQueryClient();

  return useMutation((newTag: NewTag) => createTag(newTag), {
    onSuccess: (createdTag) => updateQueryCache(queryClient, createdTag),
  });
}

export default useCreateTag;
