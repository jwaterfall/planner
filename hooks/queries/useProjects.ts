import axios from 'axios';
import { useQuery } from 'react-query';

import { IProject } from '../../models/project';

const getProjects = async () => {
  const { origin } = window.location;
  const response = await axios.get(`${origin}/api/projects`);

  const projects = response.data;
  return projects;
};

const useProjects = () => useQuery<IProject[]>('projects', () => getProjects());

export default useProjects;
