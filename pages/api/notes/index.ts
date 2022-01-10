import { NextApiRequest, NextApiResponse } from 'next';

import Note from '../../../models/note';
import { connectToDatabase } from '../../../utils/connection';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        await connectToDatabase();

        const query: any = {};
        if (req.query.projectId) query.project = req.query.projectId;
        if (req.query.tagId) query.tags = req.query.tagId;

        const notes = await Note.find(query).populate('tags');

        res.json(notes);
      } catch (err) {
        console.log(err);
        res.status(500).send('error');
      }
      break;
    case 'PUT':
      try {
        await connectToDatabase();

        const date = new Date();
        const note = new Note({ ...req.body, date });
        await Note.populate(note, 'tags');

        await note.save();
        res.json(note);
      } catch (err) {
        console.log(err);
        res.status(500).send('error');
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
