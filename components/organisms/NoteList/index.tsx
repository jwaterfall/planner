import { FC } from 'react';
import Masonry from 'react-masonry-css';

import useNotes from '../../../queries/useNotes';
import Note from '../../molecules/Note';

const NoteList: FC = () => {
  const { data: notes } = useNotes();

  const breakpointColumns = {
    default: 5,
    1250: 4,
    1100: 3,
    700: 2,
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
