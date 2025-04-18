import { MemeCard } from "@/components/MemeCard";
import { Meme } from "@/types/Meme";

interface MemeListProps {
  memes: Meme[];
}

export const MemeList: React.FC<MemeListProps> = ({ memes }) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-8 md:px-10 lg:px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {memes.map((meme: Meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </div>
  );
};
