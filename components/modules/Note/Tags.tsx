import { FC } from 'react';

import { INote } from '../../../models/note';
import { Tag, TagsContainer } from './styles';

interface ITagsProps {
  note: INote;
}

const Tags: FC<ITagsProps> = ({ note }) => (
  <TagsContainer>
    {note.tags.map((tag) => (
      <Tag key={tag._id} color={tag.color}>
        {tag.name}
      </Tag>
    ))}
  </TagsContainer>
);

export default Tags;
