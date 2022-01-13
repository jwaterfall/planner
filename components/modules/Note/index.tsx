import { FC } from 'react';

import { INote } from '../../../models/note';
import DefaultNote from './DefaultNote';
import ModalNote from './ModalNote';

export interface INoteProps {
  note: INote;
  variant?: 'default' | 'modal';
}

const Note: FC<INoteProps> = ({ note, variant = 'default' }) => {
  switch (variant) {
    case 'default':
      return <DefaultNote note={note} />;
    case 'modal':
      return <ModalNote note={note} />;
    default:
      return <></>;
  }
};

export default Note;
