
import React from "react";
import Image from "next/image";

const HeroSectionPage = () => {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h2 className="text-5xl font-bold text-gray-800 leading-tight w-full md:w-[600px]">
          Learn new skills online with ease
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed w-full md:w-[600px]">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
        <div className="flex space-x-4 justify-center md:justify-start">
          <button className="px-6 py-2 bg-[#000000] text-white rounded-lg hover:bg-white hover:text-[#000000] border border-[#000000] transition duration-300 ease-in-out">
            Start learning now
          </button>
          <button className="px-6 py-2 border border-gray-500 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-200 ease-in-out">
            Explore Courses
          </button>
        </div>
      </div>

      <div className="flex-1 mt-8 md:mt-0">
        <Image
          src="/topgirl.jpeg"
          alt="holding book girl image"
          width={700}
          height={900}
          className="object-cover rounded-lg shadow-lg mx-auto "
        />
      </div>
    </section>
  );
};

export default HeroSectionPage;
