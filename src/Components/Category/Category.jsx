import React from 'react';
import { useLoaderData } from 'react-router-dom';



const Category = () => {
  const learnCourse = useLoaderData()
  console.log(learnCourse)


    return (
      <div>
        <h1> {learnCourse.length} </h1>
      </div>
    );
};

export default Category;