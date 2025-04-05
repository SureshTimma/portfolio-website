"use client";

import { achievementsData } from "@/utils/data/achievements";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Achievements() {
  // Framer motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <div id="achievements" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Background blob */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 right-[30%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      {/* Section divider */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Achievements
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Achievements grid */}
      <motion.div 
        className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {achievementsData.map((achievement) => (
          <motion.div
            key={achievement.id}
            className="group relative h-64 overflow-hidden rounded-xl border border-[#1f223c] bg-[#11152c] shadow-md transition-all duration-500 hover:border-violet-500"
            variants={itemVariants}
          >
            {/* Achievement image */}
            <div className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-110 group-hover:blur-sm">
              <Image
                src={achievement.image}
                alt={achievement.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-500 group-hover:opacity-70"></div>
            </div>

            {/* Achievement details (only visible on hover) */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
              <h3 className="mb-3 text-xl font-bold text-white text-center px-4">{achievement.title}</h3>
              <p className="text-sm text-gray-200 text-center px-6">{achievement.description}</p>
            </div>

            {/* Achievement title (visible by default) */}
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-4 transition-all duration-500 group-hover:opacity-0">
              <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
            </div>

            {/* Top animated border */}
            <div className="absolute top-0 left-0 right-0 flex justify-center">
              <div className="w-3/4">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Achievements;
