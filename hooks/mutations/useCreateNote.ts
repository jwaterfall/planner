import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { Note } from '../../models/note';

export interface NewBaseNote {
  title: string;
  color: string;
  tags: string[];
  reminder?: Date;
  project?: string;
}

export interface NewDefaultNote extends NewBaseNote {
  type: 'default';
  description: string;
}

export interface NewChecklistNote extends NewBaseNote {
  type: 'checklist';
  items: { item: string; completed: boolean }[];
}

export type NewNote = NewDefaultNote | NewChecklistNote;

async function createNote(newNote: NewNote) {
  const { origin } = window.location;
  const response = await axios.put<Note>(`${origin}/api/notes`, newNote);

  const note = response.data;
  return note;
}

function updateQueryCache(queryClient: QueryClient, note: Note, projectId?: string) {
  const queryKey = projectId ? ['notes', projectId] : 'notes';
  const previousNotes = queryClient.getQueryData<Note[]>(queryKey);

  if (!previousNotes) return;

  queryClient.setQueryData(queryKey, [...previousNotes, note]);
}

function useCreateNote(projectId?: string) {
  const queryClient = useQueryClient();

  return useMutation((newNote: NewNote) => createNote(newNote), {
    onSuccess: (newNote) => updateQueryCache(queryClient, newNote, projectId),
  });
}

export default useCreateNote;
