import { FC, useState } from 'react';

import Button from '../../elements/Button';
import AddNoteModal from '../AddNoteModal';
import { Container, Title } from './styles';

interface TopbarProps {
  title?: string;
  projectId?: string;
}

const Topbar: FC<TopbarProps> = ({ title, projectId }) => {
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
        <Title>{title}</Title>
      </Container>
    </>
  );
};

export default Topbar;
