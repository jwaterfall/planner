import { NextApiRequest, NextApiResponse } from 'next';

import Project from '../../../models/project';
import { connectToDatabase } from '../../../utils/connection';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET':
      try {
        await connectToDatabase();
        const projects = await Project.find();

        res.json(projects);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    case 'PUT':
      try {
        await connectToDatabase();
        const project = new Project(req.body);

        await project.save();
        res.json(project);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
