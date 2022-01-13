import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { INote } from '../../models/note';

async function deleteNote(id: string) {
  const { origin } = window.location;
  const response = await axios.delete<INote>(`${origin}/api/notes/${id}`);

  const deletedNote = response.data;
  return deletedNote;
}

function updateQueryCache(queryClient: QueryClient, deletedNote: INote) {
  const projectId = deletedNote.project?._id;
  const queryKey = projectId ? ['notes', projectId] : 'notes';

  const previousNotes = queryClient.getQueryData<INote[]>(queryKey);

  if (!previousNotes) return;

  queryClient.setQueryData(
    queryKey,
    previousNotes.filter((note) => note._id !== deletedNote._id),
  );
}

function useDeleteNote(note: INote) {
  const queryClient = useQueryClient();

  return useMutation(() => deleteNote(note._id), {
    onSuccess: () => updateQueryCache(queryClient, note),
  });
}

export default useDeleteNote;
