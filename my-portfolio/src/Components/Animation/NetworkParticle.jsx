import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function NetworkParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: false,
        background: { color: "transparent" },
        particles: {
          number: { value: 43  },
          color: { value: "#4ade80" },
          links: {
            enable: true,
            distance: 120,
            color: "#4ade80",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.7,
            direction: "none",
            random: false,
            straight: false,
            outModes: "bounce",
          },
          size: { 
            value: {min: 1, max: 3},
            animation: {
                enable: true,
                speed: 2,
                sync: false,
            },
         },
          opacity: { value: 0.8 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: {
            grab: { distance: 150, links: { opacity: 0.8 } },
          },
        },
      }}
      className="w-full h-[500px]"
    />
  );
}
