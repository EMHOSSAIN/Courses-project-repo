import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div>
            <h1>this is  category page:{courses.length}  </h1>
        </div>
    );
};

export default Category;