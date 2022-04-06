import { FC } from 'react';

import { Note } from '../../../models/note';
import { Tag, TagsContainer } from './styles';

interface TagsProps {
  note: Note;
}

const Tags: FC<TagsProps> = ({ note }) => (
  <TagsContainer>
    {note.tags.map((tag) => (
      <Tag key={tag._id} color={tag.color}>
        {tag.name}
      </Tag>
    ))}
  </TagsContainer>
);

export default Tags;
