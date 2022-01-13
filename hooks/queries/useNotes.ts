import axios from 'axios';
import { useQuery } from 'react-query';

import { INote } from '../../models/note';

async function getNotes(projectId?: string) {
  const { origin } = window.location;
  const response = await axios.get(`${origin}/api/notes`, {
    params: { projectId },
  });

  const notes = response.data;
  return notes;
}

function useNotes(projectId?: string) {
  const queryKey = projectId ? ['notes', projectId] : 'notes';

  return useQuery<INote[]>(queryKey, () => getNotes(projectId));
}

export default useNotes;
