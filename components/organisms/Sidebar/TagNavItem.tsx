import React, { FC, useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';

import { Tag } from '../../../models/tag';
import NavLink from '../../atoms/NavLink';
import EditTagModal from '../EditTagModal';
import { ColorIcon, DropdownNavItem } from './styles';

interface TagProps {
  tag: Tag;
}

const TagNavItem: FC<TagProps> = ({ tag }) => {
  const [editModalVisibility, setEditModalVisibility] = useState(false);

  return (
    <>
      <EditTagModal
        show={editModalVisibility}
        onHide={() => setEditModalVisibility(false)}
        tag={tag}
      />
      <NavLink href={`/tag/${tag._id}`} key={tag._id} passHref>
        <DropdownNavItem color={tag.color}>
          <ColorIcon color={tag.color} />
          {tag.name}
          <HiDotsVertical
            onClick={(e) => {
              e.preventDefault();
              setEditModalVisibility(true);
            }}
          />
        </DropdownNavItem>
      </NavLink>
    </>
  );
};

export default TagNavItem;
