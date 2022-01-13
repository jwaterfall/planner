import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { IProject } from '../../models/project';

async function deleteProject(id: string) {
  const { origin } = window.location;
  const response = await axios.delete<IProject>(`${origin}/api/projects/${id}`);

  const project = response.data;
  return project;
}

function updateQueryCache(queryClient: QueryClient, deletedProject: IProject) {
  const previousProjects = queryClient.getQueryData<IProject[]>('projects');

  if (!previousProjects) return;

  queryClient.setQueryData(
    'projects',
    previousProjects.filter((project) => project._id !== deletedProject._id),
  );
}

function useDeleteProject(project: IProject) {
  const queryClient = useQueryClient();

  return useMutation(() => deleteProject(project._id), {
    onSuccess: (deletedProject) =>
      updateQueryCache(queryClient, deletedProject),
  });
}

export default useDeleteProject;
