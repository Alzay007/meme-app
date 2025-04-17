import { ChangeEvent } from "react";
import { Input } from "@heroui/input";

import { Meme } from "@/types/Meme";

interface MemeFormProps {
  meme: Meme;
  onChange: (meme: Meme) => void;
}

export const MemeForm: React.FC<MemeFormProps> = ({ meme, onChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updated = {
      ...meme,
      [e.target.name]:
        e.target.name === "likes"
          ? parseInt(e.target.value, 10)
          : e.target.value,
    };

    onChange(updated);
  };

  return (
    <>
      <Input
        id="title"
        label="Title"
        name="title"
        value={meme.title}
        onChange={handleInputChange}
      />
      <Input
        id="image"
        label="Image URL"
        name="image"
        value={meme.image}
        onChange={handleInputChange}
      />
      <Input
        id="likes"
        label="Likes"
        name="likes"
        type="number"
        value={String(meme.likes)}
        onChange={handleInputChange}
      />
    </>
  );
};
