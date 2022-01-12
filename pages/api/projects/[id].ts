import { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '../../../middleware/connectToDatabase';
import Project from '../../../models/project';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      try {
        const project = await Project.findById(id);

        res.json(project);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    case 'PATCH':
      try {
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

export default connectToDatabase(handler);
