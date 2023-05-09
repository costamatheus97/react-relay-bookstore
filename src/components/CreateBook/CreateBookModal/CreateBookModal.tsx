import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalContent,
} from '@chakra-ui/react';

import CreateBookForm from '../CreateBookForm/CreateBookForm';

type CreateBookModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateBookModal = ({ isOpen, onClose }: CreateBookModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign={'center'}>Create new book</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <CreateBookForm onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CreateBookModal;
