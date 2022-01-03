import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { Tag } from '../../models/tag';

const deleteTag = async (id: string) => {
  const { origin } = window.location;
  const response = await axios.delete<Tag>(`${origin}/api/tags/${id}`);

  const tag = response.data;
  return tag;
};

const useDeleteTag = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => deleteTag(id), {
    onSuccess: () => {
      const previousTags = queryClient.getQueryData<Tag[]>('tags');

      if (previousTags)
        queryClient.setQueryData(
          'tags',
          previousTags.filter((tag) => tag._id !== id),
        );
    },
  });
};

export default useDeleteTag;
