import React, { FC, useState } from 'react';
import {
  HiDotsVertical,
  HiOutlinePencil,
  HiOutlineTrash,
} from 'react-icons/hi';

import useDeleteTag from '../../../hooks/mutations/useDeleteTag';
import { ITag } from '../../../models/tag';
import NavLink from '../../elements/NavLink';
import { DropdownItem, DropdownMenu } from '../../templates/Dropdown';
import EditTagModal from '../EditTagModal';
import { CollapsibleArrowIcon, ColorIcon, DropdownNavItem } from './styles';

export interface ITagProps {
  tag: ITag;
}

const TagNavItem: FC<ITagProps> = ({ tag }) => {
  const [dropdownVisivbility, setDropdownVisibility] = useState(false);
  const [editModalVisibility, setEditModalVisibility] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const { mutate: deleteTag } = useDeleteTag(tag);

  return (
    <>
      <EditTagModal
        show={editModalVisibility}
        onHide={() => setEditModalVisibility(false)}
        tag={tag}
      />
      <NavLink href={`/tags/${tag._id}`} key={tag._id}>
        <DropdownNavItem data-testid="TagNavItem">
          <ColorIcon color={tag.color} />
          {tag.name}
          <CollapsibleArrowIcon ref={setReferenceElement}>
            <HiDotsVertical
              onClick={(e) => {
                e.preventDefault();
                setDropdownVisibility(true);
              }}
            />
          </CollapsibleArrowIcon>
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
              <HiOutlinePencil />
              Edit tag
            </DropdownItem>
            <DropdownItem
              onClick={(e) => {
                e.preventDefault();
                setDropdownVisibility(false);
                deleteTag();
              }}
            >
              <HiOutlineTrash />
              Delete tag
            </DropdownItem>
          </DropdownMenu>
        </DropdownNavItem>
      </NavLink>
    </>
  );
};

export default TagNavItem;
