import { FC } from 'react';

import NoteList from '../components/modules/NoteList';
import Topbar from '../components/modules/Topbar';

const IndexPage: FC = () => (
  <>
    <Topbar />
    <NoteList />
  </>
);

export default IndexPage;
