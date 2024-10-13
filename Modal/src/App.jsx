import  { useState } from 'react';
import { Button } from '@chakra-ui/react';
import ModalComponent from './ModalComponent';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Button colorScheme="teal" onClick={openModal}>
        Open Modal
      </Button>
      <ModalComponent isOpen={isModalOpen} onClose={closeModal} title="My Modal">
        <p>This is a Chakra UI modal component.</p>
      </ModalComponent>
    </div>
  );
};

export default App;
