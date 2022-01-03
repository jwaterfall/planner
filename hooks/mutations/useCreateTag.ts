import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { Tag } from '../../models/tag';

interface NewTag {
  name: string;
  color: string;
}

const createTag = async (newTag: NewTag) => {
  const { origin } = window.location;
  const response = await axios.put<Tag>(`${origin}/api/tags`, newTag);

  const tag = response.data;
  return tag;
};

const useCreateTag = () => {
  const queryClient = useQueryClient();

  return useMutation((newTag: NewTag) => createTag(newTag), {
    onSuccess: (tag) => {
      const previousTags = queryClient.getQueryData<Tag[]>('tags');

      if (previousTags)
        queryClient.setQueryData('tags', [...previousTags, tag]);
    },
  });
};

export default useCreateTag;
