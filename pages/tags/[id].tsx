import { useRouter } from 'next/router';
import { FC } from 'react';

import NoteList from '../../components/modules/NoteList';
import Topbar from '../../components/modules/Topbar';
import useTag from '../../hooks/queries/useTag';

const TagPage: FC = () => {
  const params = useRouter().query;
  const tagId = params.id as string;
  const { data: tag } = useTag(tagId);

  return (
    <>
      <Topbar title={tag?.name} />
      <NoteList tagId={tagId} />
    </>
  );
};

export default TagPage;
