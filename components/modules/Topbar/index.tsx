import { FC, useState } from 'react';

import Button from '../../elements/Button';
import AddNoteModal from '../AddNoteModal';
import { Container, Title } from './styles';

export interface ITopbarProps {
  title?: string;
  projectId?: string;
}

const Topbar: FC<ITopbarProps> = ({ title, projectId }) => {
  const [modalVisiblility, setModalVisibility] = useState(false);

  return (
    <>
      <AddNoteModal
        show={modalVisiblility}
        onHide={() => setModalVisibility(false)}
        projectId={projectId}
      />
      <Container>
        <Button onClick={() => setModalVisibility(true)}>Add Note</Button>
        <a href="/api/auth/logout">
          <Button>Sign Out</Button>
        </a>
        <Title>{title}</Title>
      </Container>
    </>
  );
};

export default Topbar;
