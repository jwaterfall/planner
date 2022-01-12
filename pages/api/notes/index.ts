import { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '../../../middleware/connectToDatabase';
import Note from '../../../models/note';
import Project from '../../../models/project';
import Tag from '../../../models/tag';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const notes = await Note.find({ project: req.query.projectId })
          .populate({ path: 'tags', model: Tag })
          .populate({ path: 'project', model: Project });

        res.json(notes);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    case 'PUT':
      try {
        const date = new Date();
        const note = new Note({ ...req.body, date });

        await note.save();

        await Note.populate(note, 'tags');
        await Note.populate(note, 'project');

        res.json(note);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default connectToDatabase(handler);
