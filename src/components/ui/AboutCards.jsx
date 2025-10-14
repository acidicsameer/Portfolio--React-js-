import React from "react";
import Slider from "react-slick";
import Cards from "/src/json/AboutCards.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutSectionSlick = () => {
  const settings = {
    infinite: true,
    vertical: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          vertical: true,
        },
      },
    ],
  };

  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen bg-gray-800 text-white p-8 gap-8">
      {/* Summary Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center md:text-left">
          Summary
        </h1>
        <p className="text-lg leading-relaxed font-medium">
          Born in 2062 BS in Nawalparasi and raised in Butwal, I started my
          academic journey at Namuna English Boarding School and later pursued
          +2 in Computer Science at Rammani Multiple College — buying my first
          laptop only midway through 11th grade.
        </p>
        <br />
        <p className="text-lg leading-relaxed font-medium">
          Fascinated by how websites and games work, I developed a deep
          curiosity for technology. That interest drove me to pursue Computer
          Engineering, and I earned the 416<sup>th</sup> rank in the IOE
          entrance, joining Purwanchal Campus.
        </p>
        <br />
        <p className="text-lg leading-relaxed font-medium">
          Currently in my second semester, I’m focused on web development using
          the MERN stack. My journey is fueled by curiosity, determination, and
          a passion for building impactful things.
        </p>
      </div>

      {/* Cards Carousel */}
      <div className="w-full md:w-1/2 flex justify-center h-[560px]">
        <Slider {...settings} className="w-full max-w-sm">
          {Cards.map((data) => (
            <div key={data.id} className="px-2 my-2">
              <div className="group cursor-pointer bg-gray-700 border-l-4 border-blue-600 shadow-md rounded-2xl p-6 transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl text-white h-[280px] w-full overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={data.image || "/images/default.png"}
                    alt={data.title}
                    className="h-8 w-8 object-contain shrink-0"
                  />
                  <h2 className="text-2xl font-bold break-words">
                    {data.title}
                  </h2>
                </div>

                {data.description && (
                  <p className="text-sm font-semibold mb-4 break-words">
                    {data.description}
                  </p>
                )}

                {Array.isArray(data.lists) ? (
                  <ul className="list-disc list-inside text-sm space-y-2 break-words">
                    {data.lists.map((item, index) => (
                      <li
                        key={index}
                        className="leading-relaxed px-2 py-1 rounded-md transition-colors duration-200 hover:bg-blue-700 break-words"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm break-words">{data.lists}</p>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AboutSectionSlick;
