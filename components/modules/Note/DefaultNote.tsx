import { FC, useState } from 'react';

import { INote } from '../../../models/note';
import ViewNoteModal from '../ViewNoteModal';
import Tags from './Tags';
import Toolbar from './Toolbar';
import { Body, Card, Fade, Title } from './styles';

export interface IDefaultNoteProps {
  note: INote;
}

const DefaultNote: FC<IDefaultNoteProps> = ({ note }) => {
  const [viewNoteModalVisibility, setViewNoteModalVisibility] = useState(false);

  function handleClick() {
    setViewNoteModalVisibility(true);
  }

  switch (note.variant) {
    case 'default':
      return (
        <>
          <ViewNoteModal
            show={viewNoteModalVisibility}
            onHide={() => setViewNoteModalVisibility(false)}
            note={note}
          />

          <Card color={note.color} onClick={handleClick}>
            {note.title && <Title>{note.title}</Title>}
            <Fade>
              <Body>{note.description}</Body>
            </Fade>
            {note.tags && <Tags note={note} />}
            <Toolbar note={note} />
          </Card>
        </>
      );
    default:
      return <></>;
  }
};

export default DefaultNote;
