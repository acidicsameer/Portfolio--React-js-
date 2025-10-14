import React from 'react';
import Cards from '/src/json/AboutCards.json';

const AboutCards = () => {
  return (
    <ul className="flex flex-wrap justify-center gap-8  bg-gray-800 py-10 px-4">
      {Cards.map((data) => (
        <li
          key={data.id}
          className="group cursor-pointer bg-white dark:bg-gray-900 border-l-4 border-blue-600 dark:border-blue-400 shadow-md dark:shadow-lg rounded-2xl w-full max-w-sm p-6 transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl"
        >
          
          <div className="flex items-center gap-3 mb-4">
            <img
              src={data.image}
              alt={data.title}
              className="h-8 w-8 object-contain"
            
            />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white ">
              {data.title}
            </h2>
          </div>

          {/* Optional Description */}
          {data.description && (
            <p className="text-sm text-gray-500 font-semibold dark:text-gray-300 mb-4">
              {data.description}
            </p>
          )}

          {/* Bullet List Content */}
          {Array.isArray(data.lists) ? (
            <ul className="list-disc list-inside  text-sm text-gray-700 dark:text-gray-200 space-y-2">
              {data.lists.map((item, id) => (
               <li
  key={id}
  className="leading-relaxed px-2 py-1 rounded-md transition-colors duration-200 hover:bg-blue-50 dark:hover:bg-blue-800"
>
  {item}
</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-700 dark:text-gray-200 ">{data.lists}</p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default AboutCards;
