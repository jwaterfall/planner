import { NextApiRequest, NextApiResponse } from 'next';

import Tag from '../../../models/tag';
import { connectToDatabase } from '../../../utils/connection';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  switch (req.method) {
    case 'PATCH':
      try {
        await connectToDatabase();

        const tag = await Tag.findByIdAndUpdate(id, req.body, { new: true });

        res.json(tag);
      } catch (err) {
        console.log(err);
        res.status(500).send('error');
      }
      break;
    case 'DELETE':
      try {
        await connectToDatabase();

        const tag = await Tag.findByIdAndDelete(id);

        res.json(tag);
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
