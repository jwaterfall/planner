import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { Tag } from "../models/tag";

interface INewTag {
  name: string;
  color: string;
}

const createTag = async (newTag: INewTag) => {
  const { origin } = window.location;
  const response = await axios.put<Tag>(`${origin}/api/tags`, newTag);

  const tag = response.data;
  return tag;
};

const useCreateTag = () => {
  const queryClient = useQueryClient();

  return useMutation((newTag: INewTag) => createTag(newTag), {
    onSuccess: (tag) => {
      const previousTags = queryClient.getQueryData<Tag[]>("tags");

      if (previousTags)
        queryClient.setQueryData("tags", [...previousTags, tag]);
    },
  });
};

export default useCreateTag;
