import React, { FC, useState } from 'react';
import { Collapse } from 'react-collapse';
import {
  HiOutlineCalendar,
  HiOutlineChevronLeft,
  HiOutlineFolder,
  HiOutlineHome,
  HiOutlinePlusCircle,
  HiOutlineTag,
  HiOutlineTrash,
} from 'react-icons/hi';

import useTags from '../../../hooks/queries/useTags';
import useToggle from '../../../hooks/useToggle';
import NavLink from '../../elements/NavLink';
import AddTagModal from '../AddTagModal';
import ProjectNavItem from './ProjectNavItem';
import TagNavItem from './TagNavItem';
import { AddNew, CollapsibleMenu, Container, Margin, NavItem, Section } from './styles';

const Sidebar: FC = () => {
  const [tagModalVisibility, setTagModalVisibility] = useState(false);
  const [tagsVisibility, toggleTagsVisibility] = useToggle(true);
  const [projectsVisibility, toggleProjectsVisibility] = useToggle(true);

  const { data: tags } = useTags();

  return (
    <>
      <AddTagModal show={tagModalVisibility} onHide={() => setTagModalVisibility(false)} />
      <Container>
        <Section>
          <NavLink href="/">
            <NavItem data-testid="HomeNavItem">
              <HiOutlineHome />
              Home
            </NavItem>
          </NavLink>
          <NavLink href="/upcoming">
            <NavItem data-testid="UpcomingNavItem">
              <HiOutlineCalendar />
              Upcoming
            </NavItem>
          </NavLink>
          <NavLink href="/trash">
            <NavItem data-testid="TrashNavItem">
              <HiOutlineTrash />
              Trash
            </NavItem>
          </NavLink>
        </Section>
        <Section>
          <CollapsibleMenu onClick={toggleTagsVisibility} isOpened={tagsVisibility}>
            <HiOutlineTag />
            Tags
            <HiOutlineChevronLeft />
          </CollapsibleMenu>
          <Collapse isOpened={tagsVisibility}>
            <Margin>
              {tags?.map((tag) => (
                <TagNavItem key={tag._id} tag={tag} />
              ))}
              <AddNew onClick={() => setTagModalVisibility(true)} data-testid="AddTagButton">
                <HiOutlinePlusCircle />
                Add New
              </AddNew>
            </Margin>
          </Collapse>
        </Section>
      </Container>
    </>
  );
};

export default Sidebar;
