import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { Note } from '../../models/note';

export interface NewBaseNote {
  title: string;
  color: string;
  tags: string[];
  reminder?: Date;
  tag?: string;
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

const createNote = async (newNote: NewNote) => {
  const { origin } = window.location;
  const response = await axios.put<Note>(`${origin}/api/notes`, newNote);

  const note = response.data;
  return note;
};

const useCreateNote = () => {
  const queryClient = useQueryClient();

  return useMutation((newNote: NewNote) => createNote(newNote), {
    onSuccess: (note) => {
      const previousNotes = queryClient.getQueryData<Note[]>('notes');

      if (previousNotes)
        queryClient.setQueryData('notes', [...previousNotes, note]);
    },
  });
};

export default useCreateNote;
