import { useEffect, useState } from "react";

import { Meme } from "@/types/Meme";

export const useMemes = () => {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMemes = async () => {
      const storedMemes = localStorage.getItem("memes");

      if (storedMemes) {
        try {
          const parsed = JSON.parse(storedMemes);

          if (Array.isArray(parsed)) {
            setMemes(parsed);
          } else {
            localStorage.removeItem("memes");
          }
        } catch {
          localStorage.removeItem("memes");
        }

        setIsLoading(false);

        return;
      }

      try {
        const res = await fetch("/memes.json");
        const data = await res.json();

        if (Array.isArray(data)) {
          setMemes(data);
          localStorage.setItem("memes", JSON.stringify(data));
        } else {
          console.error("[useMemes] Неверный формат данных из файла");
        }
      } catch (err) {
        console.error("[useMemes] Ошибка загрузки из файла", err);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(loadMemes, 500);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("memes", JSON.stringify(memes));
    }
  }, [memes, isLoading]);

  return { memes, setMemes, isLoading };
};
