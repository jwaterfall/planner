import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { INote } from '../../models/note';

export interface INewBaseNote {
  title: string;
  color: string;
  tags: string[];
  reminder?: Date;
  project?: string;
}

export interface INewDefaultNote extends INewBaseNote {
  variant: 'default';
  description: string;
}

export interface INewChecklistNote extends INewBaseNote {
  variant: 'checklist';
  items: { item: string; completed: boolean }[];
}

export type TNewNote = INewDefaultNote | INewChecklistNote;

async function createNote(newNote: TNewNote) {
  const { origin } = window.location;
  const response = await axios.put<INote>(`${origin}/api/notes`, newNote);

  const createdNote = response.data;
  return createdNote;
}

function updateQueryCache(queryClient: QueryClient, createdNote: INote) {
  const projectId = createdNote.project?._id;
  const queryKey = projectId ? ['notes', projectId] : 'notes';

  const previousNotes = queryClient.getQueryData<INote[]>(queryKey);

  if (!previousNotes) return;

  queryClient.setQueryData(queryKey, [...previousNotes, createdNote]);
}

function useCreateNote() {
  const queryClient = useQueryClient();

  return useMutation((newNote: TNewNote) => createNote(newNote), {
    onSuccess: (createdNote) => updateQueryCache(queryClient, createdNote),
  });
}

export default useCreateNote;
