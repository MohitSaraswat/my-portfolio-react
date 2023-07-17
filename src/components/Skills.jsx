import React, { useState } from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import angular from "../assets/angular-icon.png";
import reactImage from "../assets/react.png";
import graphql from "../assets/graphql.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import material from "../assets/material.png";
import pwa from "../assets/pwa.png";
import sass from "../assets/sass.png";
import typescript from "../assets/typescript.png";
import webpack from "../assets/webpack.png";
import nodejs from "../assets/nodejs.png";
import expressjs from "../assets/expressjs.png";
import mongodb from "../assets/mongodb.png";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

const Skills = () => {
  const [totalStars] = useState(5);
  const techs = [
    {
        id: 1,
        src: angular,
        title: "Angular",
        style: "shadow-red-500",
        rating: "4"
    },
    {
        id: 2,
        src: reactImage,
        title: "React",
        style: "shadow-blue-600",
        rating: "4"
    },
    {
      id: 3,
      src: html,
      title: "HTML 5",
      style: "shadow-orange-500",
      rating: "4"
    },
    {
      id: 4,
      src: css,
      title: "CSS 3",
      style: "shadow-blue-500",
      rating: "4"
    },
    {
      id: 5,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      rating: "4"
    }, 
    {
        id: 6,
        src: bootstrap,
        title: "Bootstrap",
        style: "shadow-sky-400",
        rating: "4"
    },
    {
        id: 7,
        src: sass,
        title: "SaSS",
        style: "shadow-pink-400",
        rating: "4"
    },
    {
        id: 8,
        src: material,
        title: "Angular Material",
        style: "shadow-yellow-400",
        rating: "4"
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
      rating: "3"
    },
    {
      id: 10,
      src: typescript,
      title: "TypeScript",
      style: "shadow-sky-400",
      rating: "2"
    },
    {
        id: 11,
        src: pwa,
        title: "PWA",
        style: "shadow-blue-400",
        rating: "2"
    },
    {
      id: 12,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
      rating: "2"
    },
    {
        id: 13,
        src: webpack,
        title: "Webpack / MicroFrontend",
        style: "shadow-sky-400",
        rating: "2"
    },
    {
        id: 14,
        src: nodejs,
        title: "Node JS",
        style: "shadow-green-400",
        rating: "2"
    },
    {
        id: 15,
        src: expressjs,
        title: "Express JS",
        style: "shadow-pink-400",
        rating: "2"
    },
    {
        id: 16,
        src: mongodb,
        title: "Mongo DB",
        style: "shadow-green-400",
        rating: "2"
    }
  ];

  return (
    <div
      name="skills"
      className="pt-20 lg:pt-28 px-8 lg:px-40 w-full h-full text-white"
    >
      <div className="">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline red-border">
            Skills
          </p>
        </div>
          <p className="text-xl py-6">These are the technologies I've worked with</p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style, rating }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
              <div className="inline-block">
                {[...new Array(totalStars)].map((arr, index) => {
                    return index < rating ? <AiFillStar color="yellow" style={{'display' : "inline-block"}} /> : <AiOutlineStar color="gray"  style={{'display' : "inline-block"}} />;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;