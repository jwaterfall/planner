import { useRouter } from 'next/router';
import { FC } from 'react';

import NoteList from '../../components/modules/NoteList';
import Topbar from '../../components/modules/Topbar';

const TagPage: FC = () => {
  const params = useRouter().query;
  const tagId = params.id as string;

  return (
    <>
      <Topbar />
      <NoteList tagId={tagId} />
    </>
  );
};

export default TagPage;
