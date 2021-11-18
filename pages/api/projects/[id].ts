import { NextApiRequest, NextApiResponse } from 'next';

import Project from '../../../models/project';
import { connectToDatabase } from '../../../utils/connection';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'PATCH':
      try {
        const { id } = req.query;
        await connectToDatabase();

        const project = await Project.findByIdAndUpdate(id, req.body, {
          new: true,
        });

        res.json(project);
      } catch (err) {
        console.log(err);
        res.status(500).send('error');
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.query;
        await connectToDatabase();

        const project = await Project.findByIdAndDelete(id);

        res.json(project);
      } catch (err) {
        console.log(err);
        res.status(500).send('error');
      }
      break;
    default:
      res.setHeader('Allow', ['PATCH', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
