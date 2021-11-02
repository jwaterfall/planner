import React, { FC, useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';

import { Project } from '../../../models/project';
import NavLink from '../../atoms/NavLink';
import EditProjectModal from '../EditProjectModal';
import { ColorIcon, DropdownNavItem } from './styles';

interface ProjectProps {
  project: Project;
}

const ProjectNavItem: FC<ProjectProps> = ({ project }) => {
  const [editModalVisibility, setEditModalVisibility] = useState(false);

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

export default ProjectNavItem;
