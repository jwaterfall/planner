import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { Project } from '../models/project';

interface NewProject {
  name: string;
  color: string;
}

const createProject = async (newProject: NewProject) => {
  const { origin } = window.location;
  const response = await axios.put<Project>(
    `${origin}/api/projects`,
    newProject,
  );

  const project = response.data;
  return project;
};

const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation((newProject: NewProject) => createProject(newProject), {
    onSuccess: (project) => {
      const previousProjects = queryClient.getQueryData<Project[]>('projects');

      if (previousProjects)
        queryClient.setQueryData('projects', [...previousProjects, project]);
    },
  });
};

export default useCreateProject;
