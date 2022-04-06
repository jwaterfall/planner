import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { Note } from '../../models/note';

export interface IChanges {
  title?: string;
  description?: string;
  color?: string;
  tags?: string[];
}

async function editNote(id: string, changes: IChanges) {
  const { origin } = window.location;
  const response = await axios.patch<Note>(`${origin}/api/notes/${id}`, changes);

  const note = response.data;
  return note;
}

function updateQueryCache(queryClient: QueryClient, updatedNote: Note) {
  const projectId = updatedNote.project?._id;
  const queryKey = projectId ? ['notes', projectId] : 'notes';

  const previousNotes = queryClient.getQueryData<Note[]>(queryKey);

  if (!previousNotes) return;

  queryClient.setQueryData(
    queryKey,
    previousNotes.map((note) => (note._id === updatedNote._id ? updatedNote : note)),
  );
}

const useEditNote = (note: Note) => {
  const queryClient = useQueryClient();

  return useMutation((changes: IChanges) => editNote(note._id, changes), {
    onSuccess: (updatedNote) => updateQueryCache(queryClient, updatedNote),
  });
};

export default useEditNote;
