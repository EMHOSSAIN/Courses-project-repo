import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetailes from '../Shares/CourseDetailes';



const Category = () => {
  const courses = useLoaderData()
  
    return (
       <div lg='6' >
        <h1> Course Category: {courses.length}  </h1>
        {
            courses.map(course=> <CourseDetailes
            key={course._id}
            course={course}
            ></CourseDetailes> )
        }
       </div>
     );
    
};

export default Category;