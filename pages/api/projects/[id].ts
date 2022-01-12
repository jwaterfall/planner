import { NextApiRequest, NextApiResponse } from 'next';

import Project from '../../../models/project';
import { connectToDatabase } from '../../../utils/connection';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  switch (req.method) {
    case 'PATCH':
      try {
        await connectToDatabase();

        const project = await Project.findByIdAndUpdate(id, req.body, {
          new: true,
        });

        res.json(project);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
      break;
    case 'DELETE':
      try {
        await connectToDatabase();

        const project = await Project.findByIdAndDelete(id);

        res.json(project);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
      break;
    default:
      res.setHeader('Allow', ['PATCH', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
