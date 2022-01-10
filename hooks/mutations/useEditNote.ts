import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { Note } from '../../models/note';

interface Changes {
  title?: string;
  description?: string;
  color?: string;
  tags?: string[]
}

const editNote = async (id: string, changes: Changes) => {
  const { origin } = window.location;
  const response = await axios.patch<Note>(
    `${origin}/api/notes/${id}`,
    changes,
  );

  const note = response.data;
  return note;
};

const useEditNote = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation((changes: Changes) => editNote(id, changes), {
    onSuccess: (newNote) => {
      const previousNotes = queryClient.getQueryData<Note[]>('notes');

      if (previousNotes)
        queryClient.setQueryData(
          'notes',
          previousNotes.map((note) => (note._id === id ? newNote : note)),
        );
    },
  });
};

export default useEditNote;
