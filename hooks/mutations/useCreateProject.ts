import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { Project } from '../../models/project';

interface NewProject {
  name: string;
  color: string;
}

async function createProject(newProject: NewProject) {
  const { origin } = window.location;
  const response = await axios.put<Project>(
    `${origin}/api/projects`,
    newProject,
  );

  const project = response.data;
  return project;
}

function updateQueryCache(queryClient: QueryClient, createdProject: Project) {
  const previousProjects = queryClient.getQueryData<Project[]>('projects');

  if (!previousProjects) return;

  queryClient.setQueryData('projects', [...previousProjects, createdProject]);
}

function useCreateProject() {
  const queryClient = useQueryClient();

  return useMutation((newProject: NewProject) => createProject(newProject), {
    onSuccess: (createdProject) =>
      updateQueryCache(queryClient, createdProject),
  });
}

export default useCreateProject;
