import Carousel from "../components/Carousel";
import Chronometer from "../components/Chronometer";
import PlayerSpotify from "../components/PlayerSpotify";
import Text from "../components/Text";
import { useState, useEffect } from "react";

function SurprisePage() {
  const [hearts, setHearts] = useState([]);
  const [isRaining] = useState(true); // Começa automaticamente

  useEffect(() => {
    if (!isRaining) return;

    const createHeartsBatch = (count) => {
      const half = Math.floor(count / 2);

      const leftHearts = Array.from({ length: half }, () => ({
        id: crypto.randomUUID(),
        left: Math.random() * 40 + 2, // 5% a 45%
        top: Math.random() * 20,
        size: Math.random() * 0.5 + 1,
        rotation: Math.random() * 360,
      }));

      const rightHearts = Array.from({ length: count - half }, () => ({
        id: crypto.randomUUID(),
        left: Math.random() * 40 + 50, // 55% a 95%
        top: Math.random() * 20,
        size: Math.random() * 0.5 + 1,
        rotation: Math.random() * 360,
      }));

      return [...leftHearts, ...rightHearts];
    };

    // Cria a primeira leva de corações
    const firstHearts = createHeartsBatch(5);
    setHearts((prev) => [...prev, ...firstHearts]);

    // Intervalo para criar novos corações
    const interval = setInterval(() => {
      const newHearts = createHeartsBatch(5);
      setHearts((prev) => [...prev, ...newHearts]);

      setTimeout(() => {
        setHearts((prev) =>
          prev.filter((heart) => !newHearts.some((h) => h.id === heart.id))
        );
      }, 10000);
    }, 1800);

    return () => clearInterval(interval);
  }, [isRaining]);

  return (
    <div className="flex flex-col h-[70rem] relative items-center">
      <div className="pointer-events-none relative z-20 w-[100%] h-[100%] overflow-hidden">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="absolute text-3xl animate-heart-fall"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}vh`,
              transform: `scale(${heart.size}) rotate(${heart.rotation}deg)`,
              animationDuration: "4s",
            }}
          >
            🎉
          </span>
        ))}
      </div>

      <PlayerSpotify />

      <div className="flex z-0 w-[70%] h-fit absolute top-[23.5rem] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Carousel />
      </div>

      <div className="flex absolute top-[48rem] w-full justify-center items-center">
        <Chronometer />
      </div>

      <Text />
    </div>
  );
}

export default SurprisePage;
