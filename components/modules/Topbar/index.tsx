import { FC, useState } from 'react';

import Button from '../../elements/Button';
import AddNoteModal from '../AddNoteModal';
import { Container } from './styles';

interface TopbarProps {
  projectId?: string;
}

const Topbar: FC<TopbarProps> = ({ projectId }) => {
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
      </Container>
    </>
  );
};

export default Topbar;
