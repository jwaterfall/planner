import { FC } from 'react';

import useTags from '../../../hooks/queries/useTags';
import { SectionTitle, TagPickerContainer, TagPickerRadial, TagPickerTag } from './styles';

export interface ColorPickerProps {
  tags: string[];
  setTags: (newValue: string[]) => void;
}

const TagPicker: FC<ColorPickerProps> = ({ tags, setTags }) => {
  const { data: allTags } = useTags();

  const hasTag = (id: string) => {
    return tags.some((tag) => tag === id);
  };

  const toggleTag = (id: string) => {
    setTags(hasTag(id) ? tags.filter((tag) => tag !== id) : [...tags, id]);
  };

  return (
    <div>
      <SectionTitle>Tags</SectionTitle>
      <TagPickerContainer>
        {allTags.map((tag) => (
          <TagPickerTag key={tag._id} onClick={() => toggleTag(tag._id)}>
            <TagPickerRadial  active={hasTag(tag._id)}/>
            {tag.name}
          </TagPickerTag>
        ))}
      </TagPickerContainer>
    </div>
  );
};

export default TagPicker;
