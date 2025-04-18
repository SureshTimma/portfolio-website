"use client";

import { certificatesData } from "@/utils/data/certificates";
import Image from "next/image";

function Certificates() {
  return (
    <div id="certificates" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Section divider */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section title */}
      <div className="flex justify-center my-5 lg:py-8 mb-2">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12 overflow-visible">
        <div className="flex flex-wrap justify-center gap-8">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="group relative h-[220px] w-[300px] min-h-[220px] min-w-[300px] flex-shrink-0 overflow-hidden rounded-xl border border-[#1f223c] bg-[#11152c] shadow-md transition-all duration-500 hover:border-violet-500"
            >
              <div className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-105 group-hover:blur-sm">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-500 group-hover:opacity-50"></div>
              </div>
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                <h3 className="mb-3 text-xl font-bold text-white text-center px-4">{cert.title}</h3>
                <p className="text-sm text-gray-200 text-center px-6">{cert.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-4 transition-all duration-500 group-hover:opacity-0">
                <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificates;
