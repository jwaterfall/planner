import { NextApiRequest, NextApiResponse } from 'next';

import Tag from '../../../models/tag';
import { connectToDatabase } from '../../../utils/connection';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET':
      try {
        await connectToDatabase();

        const tags = await Tag.find();

        res.json(tags);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    case 'PUT':
      try {
        await connectToDatabase();

        const tag = new Tag(req.body);

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
