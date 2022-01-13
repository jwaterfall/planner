import axios from 'axios';
import { useQuery } from 'react-query';

import { ITag } from '../../models/tag';

const getTag = async (id: string) => {
  const { origin } = window.location;
  const response = await axios.get(`${origin}/api/tags/${id}`);

  const tag = response.data;
  return tag;
};

const useTag = (id: string) =>
  useQuery<ITag | undefined>(['tag', id], () => getTag(id));

export default useTag;
