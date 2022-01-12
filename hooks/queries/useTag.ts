import axios from 'axios';
import { useQuery } from 'react-query';

import { Tag } from '../../models/tag';

const getTag = async (id: string) => {
  const { origin } = window.location;
  const response = await axios.get(`${origin}/api/tags/${id}`);

  const tag = response.data;
  return tag;
};

const useTag = (id: string) =>
  useQuery<Tag | undefined>(['tag', id], () => getTag(id));

export default useTag;
