import axios from 'axios';
import { useQuery } from 'react-query';

import { Note } from '../../models/note';

const getNotes = async (projectId?: string, tagId?: string) => {
  const { origin } = window.location;
  const response = await axios.get(`${origin}/api/notes`, { params: { projectId, tagId } });

  const notes = response.data;
  return notes;
};

const useNotes = (projectId?: string, tagId?: string) =>
  useQuery<Note[]>(['notes', projectId, tagId], () => getNotes(projectId, tagId));

export default useNotes;
