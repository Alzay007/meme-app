import { useState, ChangeEvent } from "react";
import { Modal } from "@heroui/modal";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

import { Meme } from "@/types/Meme";

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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (updatedMeme) {
      setUpdatedMeme({
        ...updatedMeme,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSave = () => {
    if (updatedMeme) {
      onSave(updatedMeme);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="text-xl font-bold mb-4">Редактировать мем</h3>
      {updatedMeme && (
        <>
          <div className="mb-4">
            <label className="block" htmlFor="title">
              Title
            </label>
            <Input
              id="title"
              name="title"
              value={updatedMeme.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block" htmlFor="image">
              Image
            </label>
            <Input
              id="image"
              name="image"
              value={updatedMeme.image}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block" htmlFor="likes">
              Likes
            </label>
            <Input
              id="likes"
              name="likes"
              type="number"
              value={String(updatedMeme.likes)}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button onClick={onClose}>Отменить</Button>
            <Button color="primary" onPress={handleSave}>
              Save
            </Button>
          </div>
        </>
      )}
    </Modal>
  );
};
