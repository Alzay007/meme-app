import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";

import { Meme } from "@/types/Meme";

interface MemeCardProps {
  meme: Meme;
}

export const MemeCard: React.FC<MemeCardProps> = ({ meme }) => {
  return (
    <Card className="w-full max-w-xs mx-auto shadow-lg rounded-lg border border-gray-300 bg-white transform transition-all duration-300 hover:border-blue-500 hover:bg-blue-50">
      <CardBody className="flex flex-col items-center justify-center p-4">
        <Image
          alt={meme.title}
          className="h-40 object-cover rounded-xl"
          src={meme.image}
        />
        <p className="font-bold mt-2">{meme.title}</p>
        <p className="text-gray-500 mt-1">Likes: {meme.likes}</p>
      </CardBody>
      <CardFooter>
        <Button
          as="a"
          className="mt-3"
          color="secondary"
          href={meme.image}
          rel="noopener noreferrer"
          target="_blank"
          variant="ghost"
        >
          Open Image
        </Button>
      </CardFooter>
    </Card>
  );
};
