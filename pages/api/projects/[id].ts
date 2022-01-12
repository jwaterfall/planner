import { NextApiRequest, NextApiResponse } from 'next';

import Project from '../../../models/project';
import { connectToDatabase } from '../../../utils/connection';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      try {
        await connectToDatabase();

        const project = await Project.findById(id);

        res.json(project);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    case 'PATCH':
      try {
        await connectToDatabase();

        const project = await Project.findByIdAndUpdate(id, req.body, {
          new: true,
        });

        res.json(project);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    case 'DELETE':
      try {
        await connectToDatabase();

        const project = await Project.findByIdAndDelete(id);

        res.json(project);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PATCH', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
