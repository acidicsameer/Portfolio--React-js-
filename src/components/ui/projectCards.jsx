import React from "react";
import Cards from "/src/json/Cards.json"; 
import { Link } from "react-router-dom";
const ProjectCards = () => {
  return (
    <>
     <section className="py-10 bg-gray-800 text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-green-400 text-transparent bg-clip-text">
          Projects
        </span>
      </h1>

      <ul className="flex flex-wrap justify-center items-center gap-y-16 gap-x-10 px-6">
        {Cards.map((data) => (
          <li
            key={data.id}
            className="group bg-white/5 p-6 w-full sm:w-[300px] md:w-[350px] h-[500px] flex flex-col items-center justify-center 
              overflow-hidden backdrop-blur-xl rounded-xl
              transition-all duration-700 ease-out hover:-translate-y-2 hover:bg-white/10"
          >
            <div className=" relative top-0 rounded-2xl hover:shadow-2xl shadow-gray-500 overflow-hidden">
              <img
                src={data.image}
                alt={data.title}
                className="object-contain h-[200px]  w-full transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            <h3 className="text-2xl font-bold text-center mt-4 mb-2">
              {data.title}
            </h3>

            <div><p className="text-center text-base px-2">{data.description}</p></div>

            <div className="flex gap-4  flex-wrap  sm:flex-row mt-6 absolute bottom-0 mb-2 ">
              <Link
                to={data.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo of ${data.title}`}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl 
                  bg-gradient-to-r from-blue-600 to-cyan-500 text-white 
                  font-semibold shadow-lg transition-all duration-500 ease-in-out 
                  transform hover:scale-105 hover:shadow-2xl 
                  hover:from-blue-500 hover:to-cyan-400 group overflow-hidden relative"
              >
              <svg viewBox="0 0 24 24"
              
                                className="w-6 h-6 group-hover:rotate-12 transition-transform duration-500"

               xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path fill-rule="nonzero" d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14zm-1 2H3v12h12V6zM7.4 8.829a.4.4 0 0 1 .215.062l4.355 2.772a.4.4 0 0 1 0 .674L7.615 15.11A.4.4 0 0 1 7 14.77V9.23c0-.221.18-.4.4-.4zM21 8.84l-4 2.8v.718l4 2.8V8.84z"></path> </g> </g></svg>
              
                Live Demo
                <span className="absolute top-0 left-0 w-0 h-full bg-white/20 transition-all duration-500 group-hover:w-full rounded-2xl"></span>
              </Link>

              <Link
                to={data.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repo of ${data.title}`}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl 
                  bg-gradient-to-r from-gray-800 to-gray-600 text-white 
                  font-semibold shadow-lg transition-all duration-500 ease-in-out 
                  transform hover:scale-105 hover:shadow-2xl 
                  hover:from-gray-700 hover:to-gray-500 group overflow-hidden relative"
              >
                <svg
                  viewBox="0 0 48 48"
                  className="w-6 h-6 group-hover:rotate-12 transition-transform duration-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5" />
                </svg>
                GitHub
                <span className="absolute top-0 left-0 w-0 h-full bg-white/20 transition-all duration-500 group-hover:w-full rounded-2xl"></span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
    </>
  );
};

export default ProjectCards;
