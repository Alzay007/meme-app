import { Meme } from "@/types/Meme";

export const validateMeme = (meme: Meme): string[] => {
  const errors: string[] = [];

  if (meme.title.trim().length < 3 || meme.title.length > 100) {
    errors.push("Title must be between 3 and 100 characters.");
  }

  if (!/^https?:\/\/.+\.jpg$/i.test(meme.image.trim())) {
    errors.push("Invalid image URL. It must be a direct link to a .jpg image.");
  }

  if (isNaN(meme.likes) || meme.likes < 0 || meme.likes > 99) {
    errors.push("Likes must be an integer between 0 and 99.");
  }

  return errors;
};
