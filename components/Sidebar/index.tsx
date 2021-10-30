import React, { FC, useState } from 'react';
import { Collapse } from 'react-collapse';
import {
  HiDotsVertical,
  HiOutlineCalendar,
  HiOutlineCheck,
  HiOutlineChevronLeft,
  HiOutlineFolder,
  HiOutlineHome,
  HiOutlinePlusCircle,
  HiOutlineTag,
  HiOutlineTrash,
} from 'react-icons/hi';

import useToggle from '../../hooks/useToggle';
import useProjects from '../../queries/useProjects';
import useTags from '../../queries/useTags';
import AddProjectModal from '../AddProjectModal';
import AddTagModal from '../AddTagModal';
import NavLink from '../NavLink';
import {
  AddNew,
  Container,
  Dropdown,
  DropdownNavItem,
  Margin,
  NavItem,
  Section,
  TagIcon,
} from './styles';

const Sidebar: FC = () => {
  const [tagModalVisibility, setTagModalVisibility] = useState(false);
  const [projectModalVisibility, setProjectModalVisibility] = useState(false);
  const [tagsVisibility, toggleTagsVisibility] = useToggle(true);
  const [projectsVisibility, toggleProjectsVisibility] = useToggle(true);
  const { data: tags } = useTags();
  const { data: projects } = useProjects();

  return (
    <>
      {tagModalVisibility && (
        <AddTagModal setVisibility={setTagModalVisibility} />
      )}
      {projectModalVisibility && (
        <AddProjectModal setVisibility={setProjectModalVisibility} />
      )}
      <Container>
        <Section>
          <NavLink href="/" passHref>
            <NavItem>
              <HiOutlineHome />
              Home
            </NavItem>
          </NavLink>
          <NavLink href="/today" passHref>
            <NavItem>
              <HiOutlineCalendar />
              Today
            </NavItem>
          </NavLink>
        </Section>
        <Section>
          <Dropdown onClick={toggleTagsVisibility} isOpened={tagsVisibility}>
            <HiOutlineTag />
            Tags
            <HiOutlineChevronLeft />
          </Dropdown>
          <Collapse isOpened={tagsVisibility}>
            <Margin>
              {tags?.map(({ _id, name, color }) => (
                <NavLink href={`/tag/${_id}`} key={_id} passHref>
                  <DropdownNavItem color={color}>
                    <TagIcon color={color} />
                    {name}
                    <HiDotsVertical />
                  </DropdownNavItem>
                </NavLink>
              ))}
              <AddNew onClick={() => setTagModalVisibility(true)}>
                <HiOutlinePlusCircle />
                Add New
              </AddNew>
            </Margin>
          </Collapse>
        </Section>
        <Section>
          <Dropdown
            onClick={toggleProjectsVisibility}
            isOpened={projectsVisibility}
          >
            <HiOutlineFolder />
            Projects
            <HiOutlineChevronLeft />
          </Dropdown>
          <Collapse isOpened={projectsVisibility}>
            <Margin>
              {projects?.map(({ _id, name, color }) => (
                <NavLink href={`/project/${_id}`} key={_id} passHref>
                  <DropdownNavItem color={color}>
                    <TagIcon color={color} />
                    {name}
                    <HiDotsVertical />
                  </DropdownNavItem>
                </NavLink>
              ))}
              <AddNew onClick={() => setProjectModalVisibility(true)}>
                <HiOutlinePlusCircle />
                Add New
              </AddNew>
            </Margin>
          </Collapse>
        </Section>
        <Section>
          <NavLink href="/completed" passHref>
            <NavItem>
              <HiOutlineCheck />
              Completed
            </NavItem>
          </NavLink>
          <NavLink href="/trash" passHref>
            <NavItem>
              <HiOutlineTrash />
              Trash
            </NavItem>
          </NavLink>
        </Section>
      </Container>
    </>
  );
};

export default Sidebar;
