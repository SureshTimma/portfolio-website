import React from 'react';
import Image from 'next/image';
import { personalData } from '@/utils/data/personal-data';

const AchievementCard = ({ achievement }) => {
  return (
    <div className="relative group w-full h-64 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      <Image
        src={achievement.image}
        alt={achievement.title}
        fill
        className="object-cover group-hover:opacity-50 transition-opacity duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
        <div className="text-white text-center p-4">
          <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
          <p className="text-sm">{achievement.description}</p>
        </div>
      </div>
    </div>
  );
};

const Achievements = () => {
  const achievements = personalData.achievements;

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#16f2b3]">
          My Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
