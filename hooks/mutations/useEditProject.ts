import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { Project } from '../../models/project';

interface Changes {
  name?: string;
  color?: string;
}

const editProject = async (id: string, changes: Changes) => {
  const { origin } = window.location;
  const response = await axios.patch<Project>(
    `${origin}/api/projects/${id}`,
    changes,
  );

  const project = response.data;
  return project;
};

const useEditProject = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation((changes: Changes) => editProject(id, changes), {
    onSuccess: (newProject) => {
      const previousProjects = queryClient.getQueryData<Project[]>('projects');

      if (previousProjects)
        queryClient.setQueryData(
          'projects',
          previousProjects.map((project) =>
            project._id === id ? newProject : project,
          ),
        );
    },
  });
};

export default useEditProject;
