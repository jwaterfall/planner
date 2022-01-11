import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { Note } from '../../models/note';

interface Changes {
  title?: string;
  description?: string;
  color?: string;
  tags?: string[];
}

async function editNote(id: string, changes: Changes) {
  const { origin } = window.location;
  const response = await axios.patch<Note>(`${origin}/api/notes/${id}`, changes);

  const note = response.data;
  return note;
}

function updateQueryCache(queryClient: QueryClient, note: Note, projectId?: string) {
  const queryKey = projectId ? ['notes', projectId] : 'notes';
  const previousNotes = queryClient.getQueryData<Note[]>(queryKey);

  if (!previousNotes) return;

  queryClient.setQueryData(
    queryKey,
    previousNotes.map((n) => (n._id === note._id ? note : n)),
  );
}

const useEditNote = (id: string, projectId?: string) => {
  const queryClient = useQueryClient();

  return useMutation((changes: Changes) => editNote(id, changes), {
    onSuccess: (newNote) => updateQueryCache(queryClient, newNote, projectId),
  });
};

export default useEditNote;
