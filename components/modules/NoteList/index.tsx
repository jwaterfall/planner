import { FC } from 'react';
import Masonry from 'react-masonry-css';

import useNotes from '../../../hooks/queries/useNotes';
import Note from '../../modules/Note';

interface NoteListProps {
  tagId?: string;
  projectId?: string;
}

const NoteList: FC<NoteListProps> = ({ tagId, projectId }) => {
  const { data: notes } = useNotes(projectId);

  const filteredNotes = !tagId
    ? notes
    : notes.filter((note) => {
        const tagIds = note.tags.map((tag) => tag._id);
        return tagIds.includes(tagId);
      });

  const breakpointColumns = {
    default: 5,
    1450: 4,
    1250: 3,
    1100: 2,
    700: 1,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {filteredNotes?.map((note, index) => (
        <Note note={note} key={index} />
      ))}
    </Masonry>
  );
};

export default NoteList;
