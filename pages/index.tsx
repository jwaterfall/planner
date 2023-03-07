import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { FC } from 'react';

import NoteList from '../components/modules/NoteList';
import Topbar from '../components/modules/Topbar';

const IndexPage: FC = () => (
  <>
    <Topbar title="Home" />
    <NoteList />
  </>
);

export default withPageAuthRequired(IndexPage);
