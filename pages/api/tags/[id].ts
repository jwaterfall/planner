import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '../../../middleware/connectToDatabase';
import TagModel from '../../../models/tag';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { user } = await getSession(req, res);

  const tag = await TagModel.findById(id);

  if (tag.author !== user.sub) {
    res.status(401).json({ error: 'Unauthorized' });
  }

  switch (req.method) {
    case 'GET':
      try {
        res.json(tag);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    case 'PATCH':
      try {
        await tag.updateOne(req.body);

        res.json(tag);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    case 'DELETE':
      try {
        await tag.deleteOne();

        res.json(tag);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PATCH', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default connectToDatabase(withApiAuthRequired(handler));
