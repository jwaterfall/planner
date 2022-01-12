import { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '../../../middleware/connectToDatabase';
import Note from '../../../models/note';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  switch (req.method) {
    case 'PATCH':
      try {
        const note = await Note.findByIdAndUpdate(id, req.body, { new: true })
          .populate('tags')
          .populate('project');

        res.json(note);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    case 'DELETE':
      try {
        const note = await Note.findByIdAndDelete(id)
          .populate('tags')
          .populate('project');

        res.json(note);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    default:
      res.setHeader('Allow', ['PATCH', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default connectToDatabase(handler);
