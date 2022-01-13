import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { ITag } from '../../models/tag';

export interface Changes {
  name?: string;
  color?: string;
}

async function editTag(id: string, changes: Changes) {
  const { origin } = window.location;
  const response = await axios.patch<ITag>(`${origin}/api/tags/${id}`, changes);

  const tag = response.data;
  return tag;
}

function updateQueryCache(queryClient: QueryClient, updatedTag: ITag) {
  const previousTags = queryClient.getQueryData<ITag[]>('tags');

  if (!previousTags) return;

  queryClient.setQueryData(
    'tags',
    previousTags.map((tag) => (tag._id === updatedTag._id ? updatedTag : tag)),
  );
}

function useEditTag(tag: ITag) {
  const queryClient = useQueryClient();

  return useMutation((changes: Changes) => editTag(tag._id, changes), {
    onSuccess: (updatedTag) => updateQueryCache(queryClient, updatedTag),
  });
}

export default useEditTag;
