import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '../../../middleware/connectToDatabase';
import NoteModel from '../../../models/note';
import ProjectModel from '../../../models/project';
import TagModel from '../../../models/tag';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { user } = await getSession(req, res);

  const note = await NoteModel.findById(id)
    .populate({ path: 'tags', model: TagModel })
    .populate({ path: 'project', model: ProjectModel });

  if (note.author !== user.sub) {
    res.status(401).json({ error: 'Unauthorized' });
  }

  switch (req.method) {
    case 'PATCH':
      try {
        await note.updateOne(req.body);

        res.json(note);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    case 'DELETE':
      try {
        note.deleteOne();

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

export default connectToDatabase(withApiAuthRequired(handler) );
