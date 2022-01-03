import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { Note } from '../../models/note';

const deleteNote = async (id: string) => {
  const { origin } = window.location;
  const response = await axios.delete<Note>(`${origin}/api/notes/${id}`);

  const note = response.data;
  return note;
};

const useDeleteNote = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => deleteNote(id), {
    onSuccess: () => {
      const previousNotes = queryClient.getQueryData<Note[]>('notes');

      if (previousNotes)
        queryClient.setQueryData(
          'notes',
          previousNotes.filter((note) => note._id !== id),
        );
    },
  });
};

export default useDeleteNote;
