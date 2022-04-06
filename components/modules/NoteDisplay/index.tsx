import { FC } from 'react';

import { Note } from '../../../models/note';
import DefaultNote from './DefaultNote';
import ModalNote from './ModalNote';

export interface NoteProps {
  note: Note;
  variant?: 'default' | 'modal';
}

const NoteDisplay: FC<NoteProps> = ({ note, variant = 'default' }) => {
  switch (variant) {
    case 'default':
      return <DefaultNote note={note} />;
    case 'modal':
      return <ModalNote note={note} />;
    default:
      return <></>;
  }
};

export default NoteDisplay;
