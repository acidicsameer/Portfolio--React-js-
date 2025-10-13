import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center w-full  py-10 px-4 md:px-12 bg-white   bg-gradient-to-b from-gray-400 via-gray-950 to-black text-white   ">
        <div className="relative w-[320px] h-[400px] md:w-1/2 md:h-[550px] flex justify-center items-end">
          <div
            className="absolute bottom-[60px] shadow-2xl w-[80%] md:w-[50%] md:h-[250px]  h-[190px]
             bg-gradient-to-tr from-black via-gray-800 to-gray-400 
             rounded-[100%_100%_50%_35%_/0%_5%_100%_100%]"
          ></div>

          <div className="absolute -top-5  flex justify-center w-full">
            <img
              src="/images/myphoto.jpg"
              alt="Sameer"
              className="w-[80%] md:w-[50%] h-[300px] md:h-[450px] object-cover rounded-full shadow-[0_15px_45px_rgba(0,0,0,0.35)] border-4 border-white transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 bg-gray-700 px-8  py-7 rounded-full shadow-xl text-center transition-transform duration-500 hover:translate-y-[-5px] hover:scale-105">
            <p className="text-3xl font-bold text-blue-600">3+</p>
            <p className="text-white  font-medium text-sm">
              Years of Experience
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2    text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold ">
            <span
              style={{
                fontFamily: "'Brush Script MT', cursive",
                fontSize: "5rem",
                color: "#2563eb",
              }}
            >
              S
            </span>
            ameer Sapkota
          </h1>

          {/* Role */}
          <h2 className="text-2xl md:text-3xl font-semibold">
            <span className="text-green-500">M</span>
            <span className="text-gray-400">E</span>
            <span className="text-sky-500">R</span>
            <span className="text-green-300">N</span>~ Learner
          </h2>

          <p className="text-white  text-base md:text-lg max-w-xl leading-relaxed">
            I specialize in full-stack development with a focus on MERN
            technologies. With several years of experience, I have successfully
            completed numerous projects and collaborated with many clients to
            bring their visions to life.
          </p>

          {/* Download Buttons */}
          <div className="flex gap-4 flex-col sm:flex-row mt-6">
            <Link
              to="/path/to/resume.pdf"
              download
              className="flex items-center gap-2 px-5 py-3 rounded-2xl 
               bg-gradient-to-r from-blue-600 to-cyan-500 text-white 
               font-semibold shadow-lg transition-all duration-500 ease-in-out 
               transform hover:scale-105 hover:shadow-2xl 
               hover:from-blue-500 hover:to-cyan-400 group overflow-hidden relative"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 group-hover:animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" />
                <polyline points="7.9 12.3 12 16.3 16.1 12.3" />
                <line x1="12" y1="2.7" x2="12" y2="14.2" />
              </svg>
              Download Resume
              <span className="absolute top-0 left-0 w-0 h-full bg-white/20 transition-all duration-500 group-hover:w-full rounded-2xl"></span>
            </Link>

            <Link
              to="https://github.com/acidicsameer"
              target="_blank"
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
              View My Work
              <span className="absolute top-0 left-0 w-0 h-full bg-white/20 transition-all duration-500 group-hover:w-full rounded-2xl"></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
