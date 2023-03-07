import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '../../../middleware/connectToDatabase';
import TagModel from '../../../models/tag';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = await getSession(req, res);

  switch (req.method) {
    case 'GET':
      try {
        const tags = await TagModel.find({ author: user.sub });

        res.json(tags);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    case 'PUT':
      try {
        const tag = new TagModel({ ...req.body, author: user.sub });

        await tag.save();
        res.json(tag);
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
