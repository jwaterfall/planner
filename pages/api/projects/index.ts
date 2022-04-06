import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '../../../middleware/connectToDatabase';
import ProjectModel from '../../../models/project';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = getSession(req, res);

  switch (req.method) {
    case 'GET':
      try {
        const projects = await ProjectModel.find({ author: user.sub });

        res.json(projects);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    case 'PUT':
      try {
        const project = new ProjectModel({ ...req.body, author: user.sub });

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

export default connectToDatabase(withApiAuthRequired(handler));
