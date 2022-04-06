import axios from 'axios';
import { useQuery } from 'react-query';

import { Project } from '../../models/project';

const getProject = async (id: string) => {
  const { origin } = window.location;
  const response = await axios.get(`${origin}/api/projects/${id}`);

  const project = response.data;
  return project;
};

const useProject = (id: string) =>
  useQuery<Project | undefined>(['project', id], () => getProject(id));

export default useProject;
