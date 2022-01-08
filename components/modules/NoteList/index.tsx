import { FC } from 'react';
import Masonry from 'react-masonry-css';

import useNotes from '../../../hooks/queries/useNotes';
import Note from '../../modules/Note';

const NoteList: FC = () => {
  const { data: notes } = useNotes();

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
      {notes?.map((note, index) => (
        <Note note={note} key={index} />
      ))}
    </Masonry>
  );
};

export default NoteList;
