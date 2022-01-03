import { FC, useState } from 'react';

import Button from '../../elements/Button';
import AddNoteModal from '../AddNoteModal';
import { Container } from './styles';

const Topbar: FC = () => {
  const [modalVisiblility, setModalVisibility] = useState(false);

  return (
    <>
      <AddNoteModal
        show={modalVisiblility}
        onHide={() => setModalVisibility(false)}
      />
      <Container>
        <Button onClick={() => setModalVisibility(true)}>Add Note</Button>
      </Container>
    </>
  );
};

export default Topbar;
