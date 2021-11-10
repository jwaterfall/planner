import React, { FC, useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';

import { Tag } from '../../../models/tag';
import useDeleteTag from '../../../mutations/useDeleteTag';
import NavLink from '../../atoms/NavLink';
import Dropdown, { DropdownItem, DropdownMenu } from '../../molecules/Dropdown';
import EditTagModal from '../EditTagModal';
import { ColorIcon, DropdownIcon, DropdownNavItem } from './styles';

interface TagProps {
  tag: Tag;
}

const TagNavItem: FC<TagProps> = ({ tag }) => {
  const [dropdownVisivbility, setDropdownVisibility] = useState(false);
  const [editModalVisibility, setEditModalVisibility] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const { mutate: deleteTag } = useDeleteTag(tag._id);

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
          <DropdownIcon ref={setReferenceElement}>
            <HiDotsVertical
              onClick={(e) => {
                e.preventDefault();
                setDropdownVisibility(true);
              }}
            />
          </DropdownIcon>
          <DropdownMenu
            referenceElement={referenceElement}
            show={dropdownVisivbility}
            onHide={() => setDropdownVisibility(false)}
          >
            <DropdownItem
              onClick={(e) => {
                e.preventDefault();
                setDropdownVisibility(false);
                setEditModalVisibility(true);
              }}
            >
              Edit
            </DropdownItem>
            <DropdownItem
              onClick={(e) => {
                e.preventDefault();
                setDropdownVisibility(false);
                deleteTag();
              }}
            >
              Delete
            </DropdownItem>
          </DropdownMenu>
        </DropdownNavItem>
      </NavLink>
    </>
  );
};

export default TagNavItem;
