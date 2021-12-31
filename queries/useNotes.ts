import axios from 'axios';
import { useQuery } from 'react-query';

import { Note } from '../models/note';

const getNotes = async () => {
  const { origin } = window.location;
  const response = await axios.get(`${origin}/api/notes`);

  const notes = response.data;
  return notes;
};

const useNotes = () => useQuery<Note[]>('notes', getNotes);

export default useNotes;
