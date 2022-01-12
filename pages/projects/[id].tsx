import { useRouter } from 'next/router';
import { FC } from 'react';

import NoteList from '../../components/modules/NoteList';
import Topbar from '../../components/modules/Topbar';
import useProject from '../../hooks/queries/useProject';

const ProjectPage: FC = () => {
  const params = useRouter().query;
  const projectId = params.id as string;
  const { data: project } = useProject(projectId);

  return (
    <>
      <Topbar title={project?.name} projectId={projectId} />
      <NoteList projectId={projectId} />
    </>
  );
};

export default ProjectPage;
