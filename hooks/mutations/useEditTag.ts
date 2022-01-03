import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { Tag } from '../../models/tag';

interface Changes {
  name?: string;
  color?: string;
}

const editTag = async (id: string, changes: Changes) => {
  const { origin } = window.location;
  const response = await axios.patch<Tag>(`${origin}/api/tags/${id}`, changes);

  const tag = response.data;
  return tag;
};

const useEditTag = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation((changes: Changes) => editTag(id, changes), {
    onSuccess: (newTag) => {
      const previousTags = queryClient.getQueryData<Tag[]>('tags');

      if (previousTags)
        queryClient.setQueryData(
          'tags',
          previousTags.map((tag) => (tag._id === id ? newTag : tag)),
        );
    },
  });
};

export default useEditTag;
