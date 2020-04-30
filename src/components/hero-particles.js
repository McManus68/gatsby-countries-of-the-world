import React from "react"

import style from "./hero-particles.module.scss"

import Particles from "react-particles-js"

const HeroParticles = () => {
  return (
    <Particles
      className={style.heroParticles}
      params={{
        particles: {
          color: { value: "#8dcbfd" },
          line_linked: {
            color: "#145f9c",
            distance: 150,
            enable: false,
            opacity: 0.1,
            width: 1,
          },
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 600 },
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: true,
            speed: 0.3,
            straight: false,
          },
          number: { density: { enable: true, value_area: 800 }, value: 60 },
          opacity: {
            anim: { enable: true, opacity_min: 0, speed: 1, sync: false },
            random: true,
            value: 1,
          },
          shape: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "400",
            },
            image: {
              height: 100,
              replace_color: true,
              src: "images/github.svg",
              width: 100,
            },
            polygon: { nb_sides: 5 },
            stroke: { color: "#000000", width: 0 },
            type: "circle",
          },
          size: {
            anim: { enable: false, size_min: 0.3, speed: 4, sync: false },
            random: true,
            value: 3,
          },
        },
      }}
    />
  )
}

export default HeroParticles
