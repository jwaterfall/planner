import { useRouter } from 'next/router';
import { FC } from 'react';

import NoteList from '../../components/modules/NoteList';
import Topbar from '../../components/modules/Topbar';

const ProjectPage: FC = () => {
  const params = useRouter().query;
  const projectId = params.id as string;

  return (
    <>
      <Topbar projectId={projectId} />
      <NoteList projectId={projectId} />
    </>
  );
};

export default ProjectPage;
