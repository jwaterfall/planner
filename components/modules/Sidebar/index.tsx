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

import useProjects from '../../../hooks/queries/useProjects';
import useTags from '../../../hooks/queries/useTags';
import useToggle from '../../../hooks/useToggle';
import NavLink from '../../elements/NavLink';
import AddProjectModal from '../AddProjectModal';
import AddTagModal from '../AddTagModal';
import ProjectNavItem from './ProjectNavItem';
import TagNavItem from './TagNavItem';
import { AddNew, CollapsibleMenu, Container, Margin, NavItem, Section } from './styles';

const Sidebar: FC = () => {
  const [tagModalVisibility, setTagModalVisibility] = useState(false);
  const [projectModalVisibility, setProjectModalVisibility] = useState(false);
  const [tagsVisibility, toggleTagsVisibility] = useToggle(true);
  const [projectsVisibility, toggleProjectsVisibility] = useToggle(true);

  const { data: tags } = useTags();
  const { data: projects } = useProjects();

  return (
    <>
      <AddTagModal show={tagModalVisibility} onHide={() => setTagModalVisibility(false)} />
      <AddProjectModal
        show={projectModalVisibility}
        onHide={() => setProjectModalVisibility(false)}
      />
      <Container>
        <Section>
          <NavLink href="/">
            <NavItem>
              <HiOutlineHome />
              Home
            </NavItem>
          </NavLink>
          <NavLink href="/today">
            <NavItem>
              <HiOutlineCalendar />
              Upcoming
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
              <AddNew onClick={() => setTagModalVisibility(true)}>
                <HiOutlinePlusCircle />
                Add New
              </AddNew>
            </Margin>
          </Collapse>
        </Section>
        <Section>
          <CollapsibleMenu onClick={toggleProjectsVisibility} isOpened={projectsVisibility}>
            <HiOutlineFolder />
            Projects
            <HiOutlineChevronLeft />
          </CollapsibleMenu>
          <Collapse isOpened={projectsVisibility}>
            <Margin>
              {projects?.map((project) => (
                <ProjectNavItem key={project._id} project={project} />
              ))}
              <AddNew onClick={() => setProjectModalVisibility(true)}>
                <HiOutlinePlusCircle />
                Add New
              </AddNew>
            </Margin>
          </Collapse>
        </Section>
        <Section>
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
