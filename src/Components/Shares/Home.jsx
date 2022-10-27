import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetailes from './CourseDetailes';

const Home = () => {
    const courses = useLoaderData()
    return (
        <div>
            <h1>Home page {courses.length} </h1>
            {
                courses.map(course=> <CourseDetailes
                key={course._id}
                course={course}
                > </CourseDetailes> )
            }
        </div>
    );
};

export default Home;