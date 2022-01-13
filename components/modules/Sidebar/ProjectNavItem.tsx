import React, { FC, useState } from 'react';
import {
  HiDotsVertical,
  HiOutlinePencil,
  HiOutlineTrash,
} from 'react-icons/hi';

import useDeleteProject from '../../../hooks/mutations/useDeleteProject';
import { IProject } from '../../../models/project';
import NavLink from '../../elements/NavLink';
import { DropdownItem, DropdownMenu } from '../../templates/Dropdown';
import EditProjectModal from '../EditProjectModal';
import { CollapsibleArrowIcon, ColorIcon, DropdownNavItem } from './styles';

export interface IProjectProps {
  project: IProject;
}

const ProjectNavItem: FC<IProjectProps> = ({ project }) => {
  const [dropdownVisivbility, setDropdownVisibility] = useState(false);
  const [editModalVisibility, setEditModalVisibility] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const { mutate: deleteProject } = useDeleteProject(project);

  return (
    <>
      <EditProjectModal
        show={editModalVisibility}
        onHide={() => setEditModalVisibility(false)}
        project={project}
      />
      <NavLink href={`/projects/${project._id}`} key={project._id}>
        <DropdownNavItem>
          <ColorIcon color={project.color} />
          {project.name}
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
