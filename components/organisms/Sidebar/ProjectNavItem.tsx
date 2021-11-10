import React, { FC, useState } from 'react';
import {
  HiDotsVertical,
  HiOutlinePencil,
  HiOutlineTrash,
} from 'react-icons/hi';

import { Project } from '../../../models/project';
import useDeleteProject from '../../../mutations/useDeleteProject';
import NavLink from '../../atoms/NavLink';
import { DropdownItem, DropdownMenu } from '../../molecules/Dropdown';
import EditProjectModal from '../EditProjectModal';
import { ColorIcon, DropdownIcon, DropdownNavItem } from './styles';

interface ProjectProps {
  project: Project;
}

const ProjectNavItem: FC<ProjectProps> = ({ project }) => {
  const [dropdownVisivbility, setDropdownVisibility] = useState(false);
  const [editModalVisibility, setEditModalVisibility] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const { mutate: deleteProject } = useDeleteProject(project._id);

  return (
    <>
      <EditProjectModal
        show={editModalVisibility}
        onHide={() => setEditModalVisibility(false)}
        project={project}
      />
      <NavLink href={`/project/${project._id}`} key={project._id} passHref>
        <DropdownNavItem color={project.color}>
          <ColorIcon color={project.color} />
          {project.name}
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
              <HiOutlinePencil />
              Edit project
            </DropdownItem>
            <DropdownItem
              onClick={(e) => {
                e.preventDefault();
                setDropdownVisibility(false);
                deleteProject();
              }}
            >
              <HiOutlineTrash />
              Delete project
            </DropdownItem>
          </DropdownMenu>
        </DropdownNavItem>
      </NavLink>
    </>
  );
};

export default ProjectNavItem;
