import React, { useEffect, useState } from "react";
import Particles from "react-particles-js";

const Canvas = () => {
  const [canvasDimensions, setCanvasDimensions] = useState({
    width: "0px",
    height: "0px",
  });

  const updateWindowDimensions = () => {
    setCanvasDimensions({
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`,
    });
  };

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        background: "#2D3047",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
      }}
    >
      <Particles
        {...canvasDimensions}
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            color: {
              value: "#FFC04A",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#FFC04A",
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.04,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 5.8,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable_auto: true,
              distance: 150,
              color: "#FFC04A",
              opacity: 0.4,
              width: 1,
              condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
              },
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
              },
              onclick: {
                enable: false,
              },
              resize: true,
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default Canvas;
