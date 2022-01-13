import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { ITag } from '../../models/tag';

async function deleteTag(id: string) {
  const { origin } = window.location;
  const response = await axios.delete<ITag>(`${origin}/api/tags/${id}`);

  const tag = response.data;
  return tag;
}

function updateQueryCache(queryClient: QueryClient, deletedTag: ITag) {
  const previousTags = queryClient.getQueryData<ITag[]>('tags');

  if (!previousTags) return;

  queryClient.setQueryData(
    'tags',
    previousTags.filter((tag) => tag._id !== deletedTag._id),
  );
}

function useDeleteTag(tag: ITag) {
  const queryClient = useQueryClient();

  return useMutation(() => deleteTag(tag._id), {
    onSuccess: (deletedTag) => {
      updateQueryCache(queryClient, deletedTag);
    },
  });
}

export default useDeleteTag;
