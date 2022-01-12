import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { Project } from '../../models/project';

interface Changes {
  name?: string;
  color?: string;
}

async function editProject(id: string, changes: Changes) {
  const { origin } = window.location;
  const response = await axios.patch<Project>(
    `${origin}/api/projects/${id}`,
    changes,
  );

  const project = response.data;
  return project;
}

function updateQueryCache(queryClient: QueryClient, updatedProject: Project) {
  const previousProjects = queryClient.getQueryData<Project[]>('projects');

  if (!previousProjects) return;

  queryClient.setQueryData(
    'projects',
    previousProjects.map((project) =>
      project._id === updatedProject._id ? updatedProject : project,
    ),
  );
}

function useEditProject(project: Project) {
  const queryClient = useQueryClient();

  return useMutation((changes: Changes) => editProject(project._id, changes), {
    onSuccess: (updatedProject) =>
      updateQueryCache(queryClient, updatedProject),
  });
}

export default useEditProject;
