import { NextApiRequest, NextApiResponse } from 'next';

import Note from '../../../models/note';
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

        const note = await Note.findByIdAndUpdate(id, req.body, { new: true });

        res.json(note);
      } catch (err) {
        console.log(err);
        res.status(500).send('error');
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.query;
        await connectToDatabase();

        const note = await Note.findByIdAndDelete(id);

        res.json(note);
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
