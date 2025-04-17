import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { Button } from "@heroui/button";

import { EditModal } from "@/components/EditModal/EditModal";
import { Meme } from "@/types/Meme";

interface MemeTableProps {
  memes: Meme[];
  setMemes: React.Dispatch<React.SetStateAction<Meme[]>>;
}

export const MemeTable: React.FC<MemeTableProps> = ({ memes, setMemes }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMeme, setCurrentMeme] = useState<Meme | null>(null);

  const handleEditClick = (meme: Meme) => {
    setCurrentMeme(meme);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentMeme(null);
  };

  const handleSaveChanges = (updatedMeme: Meme) => {
    setMemes((prevMemes) =>
      prevMemes.map((meme) =>
        meme.id === updatedMeme.id ? updatedMeme : meme,
      ),
    );
    handleModalClose();
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-8 md:px-10 lg:px-4 py-8">
      <Table aria-label="list of memes">
        <TableHeader>
          <TableColumn>Id</TableColumn>
          <TableColumn>Title</TableColumn>
          <TableColumn>Likes</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {memes.map((meme) => (
            <TableRow key={meme.id}>
              <TableCell>{meme.id}</TableCell>
              <TableCell>{meme.title}</TableCell>
              <TableCell>{meme.likes}</TableCell>
              <TableCell>
                <Button
                  color="primary"
                  variant="flat"
                  onPress={() => handleEditClick(meme)}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <EditModal
        isOpen={isModalOpen}
        meme={currentMeme}
        onClose={handleModalClose}
        onSave={handleSaveChanges}
      />
    </div>
  );
};
