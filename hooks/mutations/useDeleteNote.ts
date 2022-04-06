import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { Note } from '../../models/note';

async function deleteNote(id: string) {
  const { origin } = window.location;
  const response = await axios.delete<Note>(`${origin}/api/notes/${id}`);

  const deletedNote = response.data;
  return deletedNote;
}

function updateQueryCache(queryClient: QueryClient, deletedNote: Note) {
  const projectId = deletedNote.project?._id;
  const queryKey = projectId ? ['notes', projectId] : 'notes';

  const previousNotes = queryClient.getQueryData<Note[]>(queryKey);

  if (!previousNotes) return;

  queryClient.setQueryData(
    queryKey,
    previousNotes.filter((note) => note._id !== deletedNote._id),
  );
}

function useDeleteNote(note: Note) {
  const queryClient = useQueryClient();

  return useMutation(() => deleteNote(note._id), {
    onSuccess: () => updateQueryCache(queryClient, note),
  });
}

export default useDeleteNote;
