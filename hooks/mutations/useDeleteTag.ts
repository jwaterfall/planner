import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { Tag } from '../../models/tag';

async function deleteTag(id: string) {
  const { origin } = window.location;
  const response = await axios.delete<Tag>(`${origin}/api/tags/${id}`);

  const tag = response.data;
  return tag;
}

function updateQueryCache(queryClient: QueryClient, deletedTag: Tag) {
  const previousTags = queryClient.getQueryData<Tag[]>('tags');

  if (!previousTags) return;

  queryClient.setQueryData(
    'tags',
    previousTags.filter((tag) => tag._id !== deletedTag._id),
  );
}

function useDeleteTag(tag: Tag) {
  const queryClient = useQueryClient();

  return useMutation(() => deleteTag(tag._id), {
    onSuccess: (deletedTag) => {
      updateQueryCache(queryClient, deletedTag);
    },
  });
}

export default useDeleteTag;
