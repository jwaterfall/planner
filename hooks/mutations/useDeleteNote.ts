import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { Note } from '../../models/note';

async function deleteNote(id: string) {
  const { origin } = window.location;
  const response = await axios.delete<Note>(`${origin}/api/notes/${id}`);

  const note = response.data;
  return note;
}

function updateQueryCache(queryClient: QueryClient, id: string, projectId?: string) {
  const queryKey = projectId ? ['notes', projectId] : 'notes';
  const previousNotes = queryClient.getQueryData<Note[]>(queryKey);

  if (!previousNotes) return;

  queryClient.setQueryData(
    queryKey,
    previousNotes.filter((note) => note._id !== id),
  );
}

function useDeleteNote(id: string, projectId?: string) {
  const queryClient = useQueryClient();

  return useMutation(() => deleteNote(id), {
    onSuccess: () => updateQueryCache(queryClient, id, projectId),
  });
}

export default useDeleteNote;
