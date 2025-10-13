import React from "react";
import Tools from "../json/Tools.json";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Link } from "react-router-dom"; 

const Skill = () => {
  return (
    <section className="py-16  bg-gray-500 text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-green-400 text-transparent bg-clip-text">
          Skills & Tools
        </span>
      </h1>

      <ul className="flex flex-wrap justify-center items-center gap-y-17 gap-x-10 px-6">
        {Tools.map((data) => (
          <li
            key={data.id}
            className="group relative bg-white/5 border border-white/10 
                       rounded-2xl p-6 w-[220px] h-[180px] flex items-center justify-center 
                       overflow-hidden backdrop-blur-xl 
                       transition-all duration-700 ease-out 
                       hover:-translate-y-2 hover:bg-white/10"
          >
         
            <div className="absolute inset-0 rounded-2xl  hover:shadow-2xl shadow-gray-500"></div>

          
            
            <Link 
            
            data-tooltip-id="my-tooltip" data-tooltip-content={data.title}>
 <img
              src={data.img}
              alt={data.title}
              className="relative z-10 object-contain h-[200px]  transition-transform duration-700 ease-out group-hover:scale-110"
            />
</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skill;
