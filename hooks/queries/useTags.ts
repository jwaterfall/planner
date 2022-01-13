import axios from 'axios';
import { useQuery } from 'react-query';

import { ITag } from '../../models/tag';

const getTags = async () => {
  const { origin } = window.location;
  const response = await axios.get(`${origin}/api/tags`);

  const tags = response.data;
  return tags;
};

const useTags = () => useQuery<ITag[]>('tags', () => getTags());

export default useTags;
