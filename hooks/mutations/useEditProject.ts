import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { IProject } from '../../models/project';

export interface IChanges {
  name?: string;
  color?: string;
}

async function editProject(id: string, changes: IChanges) {
  const { origin } = window.location;
  const response = await axios.patch<IProject>(
    `${origin}/api/projects/${id}`,
    changes,
  );

  const project = response.data;
  return project;
}

function updateQueryCache(queryClient: QueryClient, updatedProject: IProject) {
  const previousProjects = queryClient.getQueryData<IProject[]>('projects');

  if (!previousProjects) return;

  queryClient.setQueryData(
    'projects',
    previousProjects.map((project) =>
      project._id === updatedProject._id ? updatedProject : project,
    ),
  );
}

function useEditProject(project: IProject) {
  const queryClient = useQueryClient();

  return useMutation((changes: IChanges) => editProject(project._id, changes), {
    onSuccess: (updatedProject) =>
      updateQueryCache(queryClient, updatedProject),
  });
}

export default useEditProject;
