import { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";

import { MemeForm } from "../MemeForm";
import { ErrorNotification } from "../ErrorNotification";

import { Meme } from "@/types/Meme";
import { validateMeme } from "@/utils/validate";

interface EditMemeModalProps {
  isOpen: boolean;
  meme: Meme | null;
  onSave: (meme: Meme) => void;
  onClose: () => void;
}

export const EditModal: React.FC<EditMemeModalProps> = ({
  isOpen,
  meme,
  onSave,
  onClose,
}) => {
  const [updatedMeme, setUpdatedMeme] = useState<Meme | null>(meme);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setUpdatedMeme(meme);
  }, [meme]);

  const handleSave = () => {
    if (!updatedMeme) return;

    const errors = validateMeme(updatedMeme);

    if (errors.length > 0) {
      setError(errors.join(" "));

      return;
    }

    onSave(updatedMeme);
    setError("");
  };

  return (
    <Modal isOpen={isOpen} placement="center" onClose={onClose}>
      <ModalContent>
        <ModalHeader className="text-xl font-bold">Update Meme</ModalHeader>
        <ModalBody>
          {updatedMeme && (
            <>
              <MemeForm meme={updatedMeme} onChange={setUpdatedMeme} />
              {error && <ErrorNotification message={error} />}
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button variant="light" onPress={onClose}>
            Cancel
          </Button>
          <Button color="primary" onPress={handleSave}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
