"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FlipWords = ({ words, duration = 2500, className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), duration);
    return () => clearInterval(id);
  }, [words, duration]);

  return (
    <div className={`inline-block overflow-hidden leading-none ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="inline-block whitespace-nowrap px-4 py-2"
        >
          {words[index].split("").map((c, i) => (
            <motion.span key={i} className="inline-block">
              {c}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const DeveloperFlip = () => {
  const phrases = ["FULL-STACK DEVELOPER", "REACT-ENTHUSIAST", "CREATIVE-MINDSET","EAGER-TO-LEARN"];

  return (
    <div className="w-[400px] flex justify-center items-center p-1 bg-purple-900/80 text-purple-300 rounded-2xl border border-purple-700 backdrop-blur-sm shadow-lg max-w-full ">
      <div className="font-bold text-2xl sm:text-4xl md:text-xl uppercase text-gray-100 whitespace-nowrap">
        <FlipWords words={phrases} />
      </div>
    </div>
  );
};

export default DeveloperFlip;

