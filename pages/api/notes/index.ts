import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '../../../middleware/connectToDatabase';
import NoteModel from '../../../models/note';
import ProjectModel from '../../../models/project';
import TagModel from '../../../models/tag';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = getSession(req, res);

  switch (req.method) {
    case 'GET':
      try {
        const notes = await NoteModel.find({ author: user.sub, project: req.query.projectId })
          .populate({ path: 'tags', model: TagModel })
          .populate({ path: 'project', model: ProjectModel });

        res.json(notes);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    case 'PUT':
      try {
        const date = new Date();
        const note = new NoteModel({ ...req.body, date, author: user.sub });

        await note.save();

        await NoteModel.populate(note, 'tags');
        await NoteModel.populate(note, 'project');

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

export default connectToDatabase(withApiAuthRequired(handler));
