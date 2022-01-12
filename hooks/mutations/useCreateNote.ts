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

  const createdNote = response.data;
  return createdNote;
}

function updateQueryCache(queryClient: QueryClient, createdNote: Note) {
  const projectId = createdNote.project?._id;
  const queryKey = projectId ? ['notes', projectId] : 'notes';

  const previousNotes = queryClient.getQueryData<Note[]>(queryKey);

  if (!previousNotes) return;

  queryClient.setQueryData(queryKey, [...previousNotes, createdNote]);
}

function useCreateNote() {
  const queryClient = useQueryClient();

  return useMutation((newNote: NewNote) => createNote(newNote), {
    onSuccess: (createdNote) => updateQueryCache(queryClient, createdNote),
  });
}

export default useCreateNote;
