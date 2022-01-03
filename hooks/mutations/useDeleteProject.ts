import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { Project } from '../../models/project';

const deleteProject = async (id: string) => {
  const { origin } = window.location;
  const response = await axios.delete<Project>(`${origin}/api/projects/${id}`);

  const project = response.data;
  return project;
};

const useDeleteProject = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => deleteProject(id), {
    onSuccess: () => {
      const previousProjects = queryClient.getQueryData<Project[]>('projects');

      if (previousProjects)
        queryClient.setQueryData(
          'projects',
          previousProjects.filter((project) => project._id !== id),
        );
    },
  });
};

export default useDeleteProject;
