import { NextApiRequest, NextApiResponse } from 'next';

import Tag from '../../../models/tag';
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
        const tag = await Tag.findByIdAndUpdate(id, req.body, { new: true });
        res.json(tag);
      } catch (err) {
        console.log(err);
        res.status(500).send('error');
      }
      break;
    default:
      res.setHeader('Allow', ['PATCH']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
